const Sprint = require("../models/sprint.model")


const CREATESPRINT=async(req,res)=>{
    try {
        const { name, startDate, endDate }=req.body
        let sprint=await Sprint.create({name,startDate,endDate})
        return res.status(201).send(sprint)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const GETALLSPRINTS=async(req,res)=>{
    try {
        let page=req.query.page||1
        let sprint=await Sprint.find().skip((page-1)*10).limit(10).populate("tasks")
        return res.status(201).send(sprint)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports={GETALLSPRINTS,CREATESPRINT}