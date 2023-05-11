const Post=require('../model/post')

const createPost=async({title})=>{
    let post=await new Post({title})
    return post.save()
}
module.exports={createPost}