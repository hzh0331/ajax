const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    response.send('Hello Express');
})

app.listen(8000, ()=>{
    console.log("port 8000 is listening")
})