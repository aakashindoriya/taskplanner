const express=require("express")
const { CREATESPRINT, GETALLSPRINTS } = require("../controllers/sprit.controller")
const app=express.Router()
app.post("/create",CREATESPRINT)
app.get("/",GETALLSPRINTS)
module.exports=app