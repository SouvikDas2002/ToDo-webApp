const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    tasks:{
        type:String,
    },
    done:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
const TodoModel=new mongoose.model('todos',TodoSchema);
module.exports = TodoModel;