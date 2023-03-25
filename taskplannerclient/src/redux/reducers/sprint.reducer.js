import {ADD_NEW_SPRINT,
    CREATE_NEW_TASK,
    GET_ALL_SPRINT,
    LOADING,
    UPDATE_TASK_ASSINEE,UPDATE_TASK_STATUS

} from "../actionTypes/sprint.actions.types"
let init={
    sprint:[],
    isloading:false
}


export const sprintReducer=(state=init,{type,payload})=>{
    switch(type){
        case GET_ALL_SPRINT:return {...state,isloading:false,sprint:[...payload]}
        case CREATE_NEW_TASK:return {...state,isloading:false,sprint:[...payload]}
        case LOADING:return {...state,isloading:true}
        default:return state
    }
}