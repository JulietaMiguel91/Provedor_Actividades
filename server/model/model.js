const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },
    activity : {
        type: String,
        required: true,
       
    },
    url : String
  
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;