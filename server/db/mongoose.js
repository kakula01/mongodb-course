var mongoose = require('mongoose');


mongoose.promise = global.promise

 var db={
 	localhost:'mongodb://localhost:27017/TodoApp',
 	mlab:'mongodb://<dbuser>:<dbpassword>@ds259085.mlab.com:59085/todo'
 }
mongoose.connect(db.localhost||db.mlab );

module.exports={mongoose};