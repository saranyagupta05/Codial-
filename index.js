const express= require('express'); 
const app= express(); 

const port= 8000; 

app.listen(port, function(err){

    // INTERPOLLATION 
    
    if(err){
        console.log(`Error in running server: ${err}`); 
    }
    
    console.log(`Server running on port : ${port}`); 
})