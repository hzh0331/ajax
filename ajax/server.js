const express = require('express');

const app = express();

// app.get('/server', (request, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.send('Hello AJAX');
// })
app.all('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('Hello AJAX');
})

app.listen(8000, ()=>{
    console.log("port 8000 is listening")
})