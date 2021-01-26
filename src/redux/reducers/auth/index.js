const initialState={user:{
    email:"",
    token:"",
    insurance:"",
    password:"",
    password_confirmation:"",
    vin_number:"",
    driving_licence:"",
    insurance:"",

},
isAuthenticated:false,
isLoading:false} 
const login =(state=initialState,action)=>{
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return{
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:{
                    email:action.payload.data.userDetail.email,
                    token:action.payload.data.userDetail.access_token
                }
            }
        case "LOADER" : 
        return{
            ...state,
            isLoading:action.payload
        }  
        case "REGISTER_SUCCESS" :
            return {
                ...state,
            }
        case "VALIDATE_SUCCESS":
            return {
                ...state,
                isAuthenticated:true,
                user:{
                    email:action.payload.data.userDetail.email,
                    token:action.payload.data.userDetail.access_token
                },
                isLoading:false,
            }
    
        default:
            return {...state,isLoading:false};
    }
}
export default login