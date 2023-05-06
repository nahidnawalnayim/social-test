const router=require('express').Router();
const {loginRoute,PostUser} = require('../controller/auth')
router.post("/register",PostUser);
// router.post("/login",loginRoute);

module.exports =router