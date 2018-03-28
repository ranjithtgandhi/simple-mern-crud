var mongoose = require('mongoose');
	mongoose.Promise = global.Promise;
var connection = mongoose.connect('mongodb://localhost/simple-mern-crud', function(err) {
	    if (err) {
	        console.log('Not connected to the database: ' + err); 
	    } else {
	        console.log('Successfully connected to MongoDB'); 
	    }
	});
module.exports = connection;