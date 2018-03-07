var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var userSchema = new Schema({
 _id: { type: objectId, auto: true },
 firstName: { type: String, required: true },
 lastName: { type: String, required: true }
}, {
 versionKey: false
});
 
var user = mongoose.model('users', userSchema);
 
module.exports = user;