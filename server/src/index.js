require("dotenv").config()
const express=require("express")
const cors=require("cors")
const Connect = require("./config/db.connect")
const app=express()

app.use(cors())
app.use(express.json())


app.get("/",(req,res)=>res.send("welcome to taskplanner"))



const PORT=process.env.PORT||8080
app.listen(PORT,async()=>{
    await Connect()
    console.log(`listenning on Port :${PORT}`)
})
