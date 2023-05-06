const User=require('../model/user')

const findUser=()=>{
    return User.find()
}

const findUserbyProp=(key,value)=>{
  if (key==='_id'){
   return User.findById(value)
  }  
  return User.findOne({[key]:value}) 
}

const createUser=async ({name,email,password})=>{
 const user=new User({name,email,password})
 return await user.save()
}

const registerService = async ({ name, email, password }) => {
    let user = await findUserbyProp("email", email);
    if (user) {
      throw Error("User already exist!!");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return createUser({ name, email, password: hash });
  };
  

const PostUser=async(req,res,next)=>{
    const {name,email,password}=req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: "Invalid username or password" });
      } else {
        console.log("saving your info");
      }
      try {
        let user = await registerService({ name, email, password });
        if (user) {
          return res.status(201).json({ message: "user successfully created" });
        }
    
        /**
         * if user does not exist in database, Create new user.
         ** User is a model
         */
    
        user = new User({ name, email, password });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        await user.save();
        return res.status(201).json({ message: "New user created", user });
      } catch (e) {
        console.log(e);
        // next(e);
      }

}

module.exports={PostUser}