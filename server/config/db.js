var mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://localhost:27017/mern_crud');
 
module.exports = connection;