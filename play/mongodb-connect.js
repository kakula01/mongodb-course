//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, objectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err, db)=>{
	if(err){
		return console.log('unable to connect to MongoDB server');
	}
		console.log('connected to MongoDB server');

		db.collection('TodoApp').insertOne({
			name:'keerthi',
			age:28,
			completed:false
		},(err, result)=>{
			if(err){
				return console.log('Unable to connect to server',err)
			}

			console.log(JSON.stringify(result.ops, undefined, 2));
		});

		// db.collection('Users').insertOne({
		// 	name:'prajwal kumar',
		// 	age:2,
		// 	location:'India'
		// },(err, result)=>{
		// 	if(err){
		// 		return console.log('record not found',err);
		// 	}

		// 	console.log(result.ops[0]._id.getTimestamp() )
		// })
		// db.close();
})