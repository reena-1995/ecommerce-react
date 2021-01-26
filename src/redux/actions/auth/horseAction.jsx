import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";

export const horseList = (token) =>{
    return (dispatch) =>{
        axios.get("https://api-dev.manewayznavigation.com/api/view-horse",{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            dispatch({type:"HORSE_LIST_SUCCESS",payload:response.data})
        }).catch(error=>{
            dispatch({type:"HORSE_LIST_FAIL",payload:error.response.data})
        })
    }
}
export const horseDetailBySlug = (slug)=> {
   return (dispatch,getState)=>{
       const horseDetails=getState().horseReducer.horseDetail.map(value=>
           //Comparing 
            value.slug==slug
       )
       dispatch({type:"HORSE_DETAILS_BY_SLUG",payload:horseDetails})
   }
}