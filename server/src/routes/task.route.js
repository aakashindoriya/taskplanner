const express=require("express")
const { ADDTASK, UPDATETASK, MYTASK } = require("../controllers/task.controller")
const app =express.Router()

app.post("/:sprintid",ADDTASK)
app.patch("/:taskid",UPDATETASK)
app.get("/:username",MYTASK)

module.exports=app