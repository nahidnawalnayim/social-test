const mongoose=require('mongoose')
const PostSchema=mongoose.Schema({

    title:{
    type: String,
    required: true
   }
   
})

const Post=mongoose.model("post",PostSchema)
module.exports = Post