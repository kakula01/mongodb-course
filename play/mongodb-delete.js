
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApi', (err, db)=>{
	if(err){
		return console.log('Unable to connect to Mongo server', err);
	}
	console.log('Connection established successfully');
	//delete many

	// db.collection('TodoApp').deleteMany({eat:'pototo'}).then((result)=>{
	// 	console.log(result);
	// })

	//delete one

	// db.collection('TodoApp').deleteOne({eat:'curd rice'}).then((res)=>{
	// 	console.log(res);
	// })

	//findOneAnddelete

	db.collection('TodoApp').findOneAndDelete({eat:'potato'}).then((res)=>{
		console.log(res);
	})
	db.close();
})