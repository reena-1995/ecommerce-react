const initialState={user:{
    email:"",
    token:""
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
                    email:action.payload.email,
                    token:action.payload.token
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
    
        default:
            return {...state,isLoading:false};
    }
}
export default login