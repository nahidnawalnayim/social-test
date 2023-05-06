const mongoose =require('mongoose');

const commentSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})
const Comment=mongoose.model("comment",commentSchema)
module.exports=Comment