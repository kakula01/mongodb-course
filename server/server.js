var express = require('express');
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo');
var {Users} = require('./models/users');

var {ObjectId} = require('mongodb')


var app = express();

const port = process.env.PORT ||4000;

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

app.get('/todos/:id',(req,res)=>{
	var id = req.params.id;
	if(!ObjectId.isValid(id)){
		return	res.status(404).send()
	}
	Todo.findById(id).then((todo)=>{
		if(!todo){
			return res.status(404).send();
		}
		res.send({todo});
	}).catch((e)=> {
		res.status(404).send();
	})
})

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

app.listen(port,()=>{
	console.log(`started on port ${port}`)
});
module.exports ={app}
