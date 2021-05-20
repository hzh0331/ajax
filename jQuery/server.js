const express = require('express');

const app = express();

// app.get('/server', (request, response)=>{
//     response.setHeader('Access-Control-Allow-Origin', '*')
//     response.send('Hello AJAX');
// })
app.all('/jquery-server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    response.send('Hello jquery');
})

app.all('/delay', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader('Access-Control-Allow-Headers', '*')
    setTimeout(()=>{
        response.send('delay');
    }, 3000)
})

app.listen(8000, ()=>{
    console.log("port 8000 is listening")
})