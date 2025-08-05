const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
    },
    group : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Group'
    },
    refreshToken : {
        type : String,
        default : ''
    }
},{timestamps : true });

const User = mongoose.model('User' , userSchema);

module.exports = User;