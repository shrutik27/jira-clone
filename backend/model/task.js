const mongoose = require('mongoose');
const autoIncrement =require('mongoose-plugin-autoinc');

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
    task:{
        type: String,
        required: true 
    },
    completed:{
      type:Boolean,
      required:true
    },
    id:{
      type:Number
    }
});
ReactFormDataSchema.plugin(autoIncrement.plugin, {
  model: 'Task',
  field: 'id'
});

const Task = mongoose.model('Task', ReactFormDataSchema);
module.exports = Task;