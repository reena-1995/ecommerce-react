import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";

export const horseList = (token) =>{
    return (dispatch) =>{
        axios.post("",{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            dispatch({type:"HORSE_LIST_SUCESS",payload:response.data})
        }).catch(error=>{
            dispatch({type:"HORSE_LIST_SUCESS",payload:error.response.data})
        })
    }
}