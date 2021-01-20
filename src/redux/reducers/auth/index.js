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
                user:{
                    email:action.payload.email,
                    token:action.payload.token
                }
            }
            
    
        default:
            return state;
    }
}
export default login