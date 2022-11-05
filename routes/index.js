const express=require('express');

const router=express.Router();

const homeControllers=require('../controllers/home_controllers');
const frontControllers=require('../controllers/front_controller');
console.log('routes loaded');

router.get('/',frontControllers.x);
// router.get('/',homeControllers.home);
router.use('/users',require('./user'));

module.exports=router;