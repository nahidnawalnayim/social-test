const mongoose=require('mongoose')
const PostSchema=mongoose.Schema({

    title:{
    type: String,
    required: true
   },
//    image:{
//     type: Object,
//     required: true
//    }
   
})

const Post=mongoose.model("post",PostSchema)
module.exports = Post