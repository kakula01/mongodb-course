var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');


var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc)=>{
		res.send(doc);
	},(e)=>{
		res.status(400).send(e);
	})
});

app.get('/todos', (req, res)=>{
	Todo.find().then((todos)=>{
		res.send({todos})
	},(e)=>{
		res.status(400).send(e)
	})
});

// app.post('/users',(req,res)=>{
// 	var user = new Users({
// 		email: req.body.email
// 	});

// 	user.save().then((doc)=>{
// 		res.send(doc);
// 	},()=>{
// 		res.status.send(e);
// 	});
// });

app.listen(4000,()=>{
	console.log('started on port 4000')
});
module.exports ={app}
