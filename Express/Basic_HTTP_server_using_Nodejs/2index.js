const express = require('express');

const PORT =3000;

const app = express(); //app- server object


app.get('/home',(request,response)=>{
    response.send("hello there, welcome to get")

})

app.post('/home',(request,response)=>{
    // response.send("hello there, welcome to post")
    response.json({
        msg:"ok post"
    })

})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })


