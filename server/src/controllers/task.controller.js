const Sprint = require("../models/sprint.model")
const Task = require("../models/task.model")

const ADDTASK=async(req,res)=>{
    const {sprintid}=req.params
    const {name,description,type,assignee}=req.body
    try {
        const sprint=await Sprint.findOne({_id:sprintid})
        if(sprint){
          const task=await Task.create({name,description,type,assignee}) 
          sprint.tasks.push(task)
          await sprint.save()
          await sprint.populate("tasks")
          return res.status(201).send(sprint)  
        }
        else{
            return res.status(400).send("sprint not found")
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const UPDATETASK=async(req,res)=>{
    let {taskid}=req.params
    try {
        let updateTask=await Task.updateOne({_id:taskid},{$set:{...req.body}})
        return res.status(201).send(updateTask)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const MYTASK=async(req,res)=>{
    const {username}=req.params
    try {
        let tasks=await Task.find({assignee:username})
        return res.status(200).send(tasks)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports={ADDTASK,UPDATETASK,MYTASK}