// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,objectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err, db)=>{

	if(err){
		return console.log('Unable to connect to server', err);
	}

	console.log('connceted to Mongo server');

	db.collection('TodoApp').find().toArray().then((docs)=>{
		console.log('Todo Documents');
		console.log(JSON.stringify(docs, undefined,2));
	},(err)=>{
		console.log('Uable to connect to server', err);
	});

	// db.collection('Users').find({name:'prajwal kumar'}).toArray().then((docs)=>{
	// 	console.log(JSON.stringify(docs, undefined,2));
	// },(err)=>{
	// 	console.log('unable to get the list of DOcuments',err);
	// })
	// db.close();
})