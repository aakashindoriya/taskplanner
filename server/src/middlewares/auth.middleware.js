const jwt=require("jsonwebtoken")

const Auth=async(req,res,next)=>{
    try {
        let token=req.headers.authorization
        if(token){
            let verify=await jwt.verify(token,process.env.JWT_SECRET)
            if(verify){
                req.user=verify
                next()
            }else{
            return res.status(404).send("please login to perform this action")   
            }
        }
        else{
            return res.status(404).send("please login to perform this action")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports=Auth