//create express appclear
const exp = require("express")
const app=exp()
const mongoose = require("mongoose")
const path = require("path")
const userApp=require("./APIs/userApi")
const productApp = require("./APIs/productApi")

require("dotenv").config()

//connect react build with expreess server
app.use(exp.static(path.join(__dirname,'./build')))

//connect to the database server
mongoose.connect(process.env.DATABASE_URL)

//get default connection
const db = mongoose.connection

//if error
db.on("error",(err) => console.log("Error in Database Connection",err))
//if connection success
db.on("open",() => console.log(" Database Connected"))


//if path is user
app.use('/user', userApp)
app.use('/product', productApp)

//dealing with page refresh
app.use("*", (request, response,next) => {
    response.sendFile(path.join(__dirname, "./build/index.html"));
    });

//handling invalid paths
app.use((request, response, next) => {
    response.send({ message: `path ${request.url} is invalid` });

});

//error handler
app.use((err, req,res, next) => {
    res.send({message: "error", payload: err.message});

});


//assign port
const port = process.env.PORT;
app.listen(port,()=>console.log(`Http server listening on port ${port}..`))