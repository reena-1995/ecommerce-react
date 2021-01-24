import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";

const userList = (token) =>{
    return dispatch =>{
        axios.get("",{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            dispatch({type:"USER_LIST_SUCCESS",payload:response.data})
        }).catch(error=>{
            dispatch({type:"USER_LIST_FAIL",payload:error.response.data})
        })
    }
   
}