import {LOADING} from "../actionTypes/sprint.actions.types"
import axios from "axios"

export const getSprints=()=>async(dispatch)=>{
try {
    dispatch({type:LOADING})
    let res=await axios.get("https://taskplanner-production.up.railway.app/sprint",{
        headers:{
            Authorization:JSON.parse(localStorage.getItem("auth")).token
        }
    })
    console.log(res)
    return
} catch (error) {
    
}

}