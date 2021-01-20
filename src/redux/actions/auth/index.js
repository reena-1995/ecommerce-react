import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";
//Login work
export const login=({email,password})=>{
    console.log(email,password);
    return dispatch=>{
        axios.post("http://api-dev.manewayznavigation.com/api/login",{email:email,password:password},{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1"}}).then(response=>{
          
            dispatch({type:"LOGIN_SUCCESS",payload :response.data})
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
              history.push('/');
           
        }).catch(e=>{
            dispatch({type:"LOGIN_FAIL",payload:e})
             
            store.addNotification({
                title: "Manewaz!",
                message: e.message,
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
              history.push('/');
            
        })
        // try{
        //     const result= axios.post("http://api-dev.manewayznavigation.com/api/login",{email:email,password:password},{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1"}});
        //     dispatch({type:"LOGIN_SUCCESS",payload :result.data})
        //     NotificationManager.success('Login Successfully');
        // }catch(e){ 
        //     console.log('errr');
        //     console.log(e);
        //     NotificationManager.error("error");
        // }
        
    }
}