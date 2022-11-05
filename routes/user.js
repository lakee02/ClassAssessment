const express=require('express');

const router=express.Router();

const userControllers=require('../controllers/user_controllers');
const homeControllers=require('../controllers/home_controllers');

router.get('/',userControllers.user);
router.get('/sign-up',userControllers.signUp);
router.get('/home',homeControllers.home);

router.post('/create',userControllers.create);
router.post('/create-session',userControllers.createSession);


module.exports=router;