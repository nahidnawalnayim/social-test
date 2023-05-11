const router=require('express').Router();
const authRoutes=require('./auth')
const userRoutes=require('./user')
const authmiddleware=require('../middleware/authenticate')
router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',userRoutes);
router.use('/api/v1/users/:userId',userRoutes)
// router.use('/api/v1/postreg',(req,res) => {
//    res.send(postroute)
// })
module.exports = router