const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const app = express()
const Post=require('./model/post')
const Comment=require('./model/comment')
const User=require('./model/user')
const {getUserbyID}=require('./controller/user')
// const authenticate=require('./middleware/authenticate')
const {Postcreate}=require('./controller/postController')
var bodyParser = require('body-parser');
const router=require('express').Router();
const dotenv=require('dotenv')
const routes= require('./routes/index')
const {findUserByprop}=require('./controller/user')
dotenv.config()
//must used middlewires
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//

if(process.env.NODE_ENV!=="PRODUCTION"){
    require("dotenv").config({
        path:"/testsocial/.env"
    })}

const postLists={}
//

app.get('/',(req,res)=>{
res.send("HEllo nayim")
})


app.use(routes)

app.post('/postcon',Postcreate )

app.get('/postcon',async(req,res,next)=>{
   
   try{
      
       const fetchpost=await Post.find();

      return res.status(200).json(fetchpost) 
   }catch(e){
    next(e)
   }
  
})


//Comment service

app.post('/commentpost',async(req,res)=>{
    const {text}=req.body
    try{
        let newComment=new Comment({text})
        await newComment.save()
        return res.status(201).json({message:"comment created successfully"})
    }catch(e){
        console.log(e);
    }

})


//get user

  

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