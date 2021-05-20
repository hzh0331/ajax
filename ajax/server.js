const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.send('Hello AJAX');
})

app.listen(8000, ()=>{
    console.log("port 8000 is listening")
})