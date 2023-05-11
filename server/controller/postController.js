
const {createPost}=require('../service/post')

 async function Postcreate(req,res,next) {
    const {title}=req.body
    try{
        let post=await createPost({title})
        if(post){
          return res.status(201).json({message: "Post created successfully from controller!!"})  
        }
        await post.save()
        const findpost=await post.find();
        res.status(201).json(findpost);

    }catch(e){
        next(e)
        console.log('====================================');
        console.log(e);
        console.log('====================================');
    }
}
module.exports = {Postcreate}