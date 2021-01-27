import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";

export const horseList = (token) =>{
    return (dispatch) =>{
        axios.get("https://api-dev.manewayznavigation.com/api/view-horse",{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            if(response.status==200){
                dispatch({type:"HORSE_LIST_SUCCESS",payload:response.data})
            }else{
                dispatch({type:"HORSE_LIST_EMPTY",payload:true})
            }
            
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

export const updateHorseBySlug = ({name,owner_name,owner_number},slug,token)=>{
    return (dispatch)=>{
        axios.post("https://api-dev.manewayznavigation.com/api/edit-horse/"+slug,{name:name,owner_name:owner_name,owner_number:owner_number,age:'3',breed:'34'},{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            store.addNotification({
                title: "Manewaz!",
                message: response.data.message,
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
              history.push('/horse-list')
              dispatch({type:"HORSE_EDIT_SUCCESS",payload:response.data})
              
              
        }).catch(error=>{
            store.addNotification({
                title: "Manewaz!",
                message: "Something went wrong",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
              dispatch({type:"HORSE_EDIT_FAIL",payload:error})
        })
    }
}

export const deleteBySlug = (slug,token)=>{
    return (dispatch)=>{
        axios.get("https://api-dev.manewayznavigation.com/api/delete-horse/"+slug,{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}}).then(response=>{
            store.addNotification({
                title: "Manewaz!",
                message: "Horse Deleted Successfully",
                type: "success",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
            dispatch({type:"HORSE_DELETE_SUCCESS",payload:response.data})
            history.push('/horse-list')
        }).catch(error=>{
            store.addNotification({
                title: "Manewaz!",
                message: "Something went wrong",
                type: "danger",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                  duration: 5000,
                  onScreen: true
                }
              });
            dispatch({type:"HORSE_DELETE_FAIL",payload:true})
        });

    }
}