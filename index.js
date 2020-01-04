const express= require('express'); 
const app= express(); 

const port= 8000; 

// use express router 
// for any url starting with '/' use routes index.js

app.set('view engine', 'ejs'); 
app.set('views', './views'); 

app.use('/', require('./routes/index')); 

app.listen(port, function(err){

    // INTERPOLLATION 
    
    if(err){
        console.log(`Error in running server: ${err}`); 
    }
    
    console.log(`Server running on port : ${port}`); 
})