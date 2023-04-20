const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app = express()
const {randomBytes} = require('crypto')
const Post=require('./model/post')
var bodyParser = require('body-parser');
const router=express.Router()
//must used middlewires
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

//
const postLists={}
app.get('/post',async(req,res,next)=>{
   
   try{
      
       const fetchpost=await Post.find();

      return res.status(200).json(fetchpost) 
   }catch(e){
    next(e)
   }
  
})
//POST SERVICE
app.post('/post',async(req,res,next)=>{
    const {title}=req.body;
    try{
        let newpost=new Post({title})
       
        await newpost.save()
return res.status(201).json({message:"post created"})
    }catch(e){
console.log(e);
    }

})

mongoose.connect('mongodb://localhost:27017/testsocial',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("db connection established");
}).catch((e)=>{
    console.log(e);
})

app.listen(4000,()=>{
    console.log("server started");
})