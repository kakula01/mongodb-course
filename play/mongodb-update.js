

const {MongoClient,ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi',(err, db)=>{
	if(err){
		return console.log('Unable to connect to server', err);
	}

	console.log('connected with Mongo server')
	// db.collection('TodoApp').findOneAndUpdate({
	// 	_id: new ObjectId("59f81ecb980fae504f105ea0")
	// },{
	// 	$set:{
	// 		completed:true
	// 	}
	// },{
	// 	returnOriginal:false
	// }).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('TodoApp').findOneAndUpdate({
		_id: new ObjectId("59f7cae322c79c03abb484f1")
	},{
		$inc:{
			age:1
		}
	},{
		returnOriginal:false
	}).then((res)=>{
		console.log(res);
	})
	db.close();
});