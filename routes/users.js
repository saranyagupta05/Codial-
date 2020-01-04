const express = require('express'); 

var router = express.Router(); 
const userController= require('../controllers/users_controller'); 

router.get('/profile', userController.profile); 


module.exports= router; // to export for app index.js 