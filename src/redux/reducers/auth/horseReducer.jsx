const initialState = {
    horseDetail:{
     id:"",
     slug:"",   
    },
    isAuthenticated:false,
    isLoading:false
    }
    const horse = (state=initialState,action) =>{
        switch (action.type) {
            case "HORSE_LIST_SUCESS":
                return {
                    ...state,
                    isAuthenticated:false,
                    horseDetail:{
                        id:action.payload.data.horses.id,
                        slug:action.payload.data.horses.slug
                    },
                    isLoading:false
                }
                
        
            default:
                return {
                    ...state
                }
        }
    }
    export default horse