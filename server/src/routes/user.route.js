const express=require("express")
const { SIGNUP, LOGIN, GETUSERS } = require("../controllers/user.controller")
const app=express.Router()

app.post("/signup",SIGNUP)
app.post("/login",LOGIN)
app.get("/:username",GETUSERS)



module.exports=app