const initialState = {
    horseDetail:[],
    details:{

    },
    isAuthenticated:false,
    isLoading:false
    }
    const horse = (state=initialState,action) =>{
        switch (action.type) {
            case "HORSE_LIST_SUCCESS":
                return {
                    ...state,
                    isAuthenticated:false,
                    horseDetail:action.payload.data.horses,
                    isLoading:false
                }
            case "HORSE_DETAILS_BY_SLUG":
                return {
                    ...state,
                    isAuthenticated:false,
                    horseDetail:action.payload.data.horseDetails,
                    isLoading:false
                }
            case "HORSE_LOADER":
                    return {
                        ...state,
                        isAuthenticated:true,
                        isLoading:true
                    }
            case "HORSE_EDIT_SUCCESS":
                    return{
                        ...state,
                        isAuthenticated:false,
                        isLoading:false
                    }
            default:
                return {
                    ...state, isLoading:false
                }
        }
    }
    export default horse