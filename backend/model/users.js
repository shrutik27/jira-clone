const mongoose = require('mongoose');

const mongurl='mongodb://localhost:27017/gfg'

mongoose.connect(mongurl,{
  useNewUrlParser:true
}).then(()=>{
  console.log("connected its from users")
})

const ReactFormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true 
    },
    role: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;