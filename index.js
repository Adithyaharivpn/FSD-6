var express = require("express")
require("./db")
var userRoute = require("./router/userRoute")
var app= express();

app.use(express.json())
var port=3000;

app.use('/api',userRoute)




app.listen(port,()=>{
    console.log(`server up and running on port ${port}`)
})
