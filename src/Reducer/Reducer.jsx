export const Githubreducer = (state,action) =>{

  switch(action.type){

   case "Fetch_Github_User_Loading":{
     return{
        ...state,
        isLoading:true,
        isError:false
     }
   }

   case "Fetch_Github_User_Success":{
    return{
       ...state,
       isLoading:false,
       data:action.payload
    }
  }

  case "Fetch_Github_User_Error":{
    return{
       ...state,
       isLoading:false,
       isError:true
    }
  }

    default :
        return state
  }

}