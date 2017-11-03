var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');


var app = express();

app.use(bodyParser.json());

// app.post('/todo',(req,res)=>{
// 	var todo = new Todo({
// 		text: req.body.text
// 	});

// 	todo.save().then((doc)=>{
// 		res.send(doc);
// 	},(e)=>{
// 		res.status(400).send(e);
// 	})
// });

app.post('/users',(req,res)=>{
	var user = new Users({
		email: req.body.email
	});

	user.save().then((doc)=>{
		res.send(doc);
	},()=>{
		res.status.send(e);
	});
});

app.listen(4000,()=>{
	console.log('started on port 4000')
});

// var firstUser = new Users({
// 	//email:'keerthiakula1@gmail.com'
// });

// firstUser.save().then((doc)=>{
// 	console.log('save first User',doc)
// },(e)=>{
// 	console.log('Error occured',e)
// })