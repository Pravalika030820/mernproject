//create mini exp app
const exp = require("express")
const userApp = exp.Router();
const expressAsyncHandler = require("express-async-handler");
const User = require("./models/userModel")
const bcryptjs = require("bcryptjs")
const jwt=require('jsonwebtoken')
const verifyToken = require("./middleware/verifyToken")
//body parser
userApp.use(exp.json())

require("dotenv").config()


//Define routes

//create user
userApp.post("/create-user", expressAsyncHandler(async(req,res)=> {
    //get newUserObj 
    let newUserObj = req.body;
    console.log(newUserObj)

    let user = new User(newUserObj)

    //verify duplicate user
    let userOfDb = await User.findOne({username:user.username})

    //if user found
    if(userOfDb!==null) {
        res.send({message:"User existed"})
    }

    //if user not existed
    else{
        //hash the password
        let hashedPassword= await bcryptjs.hash(user.password,6)
        //replace password
        user.password = hashedPassword;

        //create new document
        let userDoc = new User(user)
        //save to Db
        await userDoc.save()
        //send res
        res.send({message:"User created"})


    
    }
}))

// signin user

userApp.post("/signin",expressAsyncHandler(async(req,res)=> {
    // get user obj from req
    let userCredentialsObj =req.body;
    // search username
    let userOfDb = await User.findOne({ username: userCredentialsObj.username});
    // if user not found
    if(userOfDb===null){
        res.send({message:"Invalid username"})
    } 
    // if user found 
    else{
        // compare passwords
        let status= await bcryptjs.compare(userCredentialsObj.password,userOfDb.password)
        // if password not matched
        if (status===false){
        res.send({message:"Invalid password"})
        }

        // if passwords are matched 
        else {
            // cerate jwt token 
            let jwtToken= jwt.sign(
                { username: userCredentialsObj.username},
                process.env.SECRET_KEY,
                { expiresIn:50}
                );
                // send token 
                res.send({ message: "Login success", token:jwtToken,user:userOfDb});
        }
    }
}));

//update user
//get user data
//delete user


//private  routes
userApp.get("/private-1", verifyToken,(req,res)=> {
    res.send({message: "Response of private route-1"})
});


//export
module.exports=userApp