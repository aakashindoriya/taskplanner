require("dotenv").config()
const express=require("express")
const cors=require("cors")
const Connect = require("./config/db.connect")
const app=express()
const userRoute=require("./routes/user.route")
const sprintRoute=require("./routes/sprint.route")
const taskRoutes=require("./routes/task.route")
const Auth = require("./middlewares/auth.middleware")
app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>res.send("welcome to taskplanner"))
app.use("/user",userRoute)
app.use("/sprint",Auth,sprintRoute)
app.use("/task",Auth,taskRoutes)

const PORT=process.env.PORT||8080
app.listen(PORT,async()=>{
    await Connect()
    console.log(`listenning on Port :${PORT}`)
})
