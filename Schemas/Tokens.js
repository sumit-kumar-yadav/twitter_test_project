const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tokenSchema = new Schema({
    userId :{
        type: String, 
        required : true
    },

    tokens :{
        type : String,
        required : true
    }
})


module.exports = mongoose.model('tb_tokens' , tokenSchema);



