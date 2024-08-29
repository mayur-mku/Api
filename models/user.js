const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    rating: {type: Number, min: [0,'wrong rating'], max: [5, 'max rating exceed']}
})

exports.User = mongoose.model('User', userSchema);