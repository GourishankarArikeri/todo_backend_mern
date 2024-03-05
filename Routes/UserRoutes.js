const UserModel = require("../models/UserModel")
const express = require('express')
const router = express.Router()

router.get("/getusers" , (req,res)=>{
    try {
        res.json("routes are working")
    } catch (error) {
        res.json("error connecting route")
    }
})


//register user
router.post("/reguser" , async(req,res)=>{
    try {
        const {name , email , password} = req.body
        const newUser = await UserModel.create({name, email, password})
        res.json(newUser )
    } catch (error) {
        res.json("error while creating user")
    }
})

//LOGIN USER
router.post("/login" , async(req,res)=>{
    try {
        const {email , password} = req.body
        const user = await UserModel.findOne({email})

        if(user){
          if(user.password === password){
            res.status(201).json({ "message": "User login successful" ,"id":user._id});
          }else{
            res.status(400).json({ "message": "Wrong password" });
          }
        }else{
            res.status(404).json({ "message": "User doesn't exist" });
        }

    } catch (error) {
        res.status(500).json({ "message": "Server Error" });
    }
})

module.exports= router