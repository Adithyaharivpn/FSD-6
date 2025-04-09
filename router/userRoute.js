var express = require("express")
var router = express.Router();
var userModel = require("../model/user")

router.post('/',(req,res)=>{
    try {
        userModel(req.body).save()
        res.send("Data added")
    } catch (error) {
        console.log(error)
    }
})
router.post('/api/login',async(req,res)=>{
    try {
        const user = await userModel.findOne({ email: req.body.email });
        if (!user) {
          console.log("error")
        }  
    } catch (error) {
        console.log(error)
    }
})

module.exports = router