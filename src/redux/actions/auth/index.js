import axios from "axios"
import { store } from 'react-notifications-component';
import { history } from "../../../history";
//Login work
export const login =({email,password})=>{
    return (dispatch) =>{
        axios.post("http://api-dev.manewayznavigation.com/api/login",{email:email,password:password},{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1"}}).then(response=>{
            localStorage.setItem('auth_key', response.data.data.userDetail.access_token);
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
              dispatch({type:"LOGIN_SUCCESS",payload :response.data})
              history.push('/');
           
        }).catch(e=>{
          if (e.response) {
             console.log(e.response.data);
             console.log(e.response.status);
             console.log(e.response.headers);
          }

          
            dispatch({type:"LOGIN_FAIL",payload:e.response.data.message})
            localStorage.removeItem('auth_key') 
            store.addNotification({
                title: "Manewaz!",
                message: e.response.data.message,
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
            
        })
        
  }
}



export const register = ({name,email,password,password_confirmation,vin_number,driving_licence,insurance}) => {
  return (dispatch)=>{
    axios.post("http://api-dev.manewayznavigation.com/api/register",
           {
            name:name,
            email:email,
            password:password,
            password_confirmation:password_confirmation,
            vin_number:vin_number,
            driving_licence:driving_licence,
            insurance:insurance
          },{
            headers:
            {
              "Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1"
            }
          }
          ).then(response=>{
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
            dispatch({type:"REGISTER_SUCCESS",payload:response.data})
            history.push('/')
          }).catch(error=>{
            dispatch({type:"REGISTER_FAIL",payload:response.data.message})
            store.addNotification({
              title: "Manewaz!",
              message: error.response.data.message,
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
          })
  }
}

export const valdate_token = (token) => {
  return (dispatch)=>{
    axios.get("http://api-dev.manewayznavigation.com/api/validate-oath-token",{headers:{"Device-Id":"45644564","Device-Type":"android","Is-Debug":"1","Device-Token":"4654564","Environment":"SANDBOX","Device-Name":"Note 6","App-Version":"1","Authorization":"Bearer "+token}})
  
    .then(response=>{
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
      dispatch({type:"VALIDATE_SUCCESS",payload:response.data})
      history.push('/')
    }).catch(error=>{
      store.addNotification({
        title: "Manewaz!",
        message: error.response.data.message,
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
      dispatch({type:"VALIDATE_FAIL",payload:error.response.data})
      history.push('/login')
    })
  }
}


