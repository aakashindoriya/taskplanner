import {LOADING,GET_ALL_SPRINT} from "../actionTypes/sprint.actions.types"
import axios from "axios"

export const getSprints=()=>async(dispatch)=>{
try {
    dispatch({type:LOADING})
    let res=await axios.get("https://taskplanner-production.up.railway.app/sprint",{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("auth")).token
        }
    })
    return dispatch({type:GET_ALL_SPRINT,payload:res.data})
} catch (error) {
    console.log(error)
}

}

export const updateTask=(data)=>async(dispatch)=>{
try {
    console.log(data)
    dispatch({type:LOADING})
    let res=await axios.post(`https://taskplanner-production.up.railway.app/task/update/${data.id}`,{...data},{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("auth")).token
        }
    })
    console.log(res)
} catch (error) {
    console.log(error)
}
}