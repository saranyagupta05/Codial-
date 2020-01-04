const express = require('express'); 

var router = express.Router(); 
const postController= require('../controllers/posts_controller'); 

router.get('/posts', postController.posts ); 


module.exports= router; // to export for app index.js 