var mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://ds257858.mlab.com:57858/simple-mern-crud');
 
module.exports = connection;