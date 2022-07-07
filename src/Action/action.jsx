export const githubLoadingAction = { type: "Fetch_Github_User_Loading" };
export const githubSuccessAction = { type: "Fetch_Github_User_Success" };
export const githubFailureAction = { type: "Fetch_Github_User_Error" };


export const FetchUSer = (dispatch,query) =>{
  dispatch(githubLoadingAction);

  fetch(`https://api.github.com/search/users?q=${query}`)
  .then((res)=>res.json())
  .then((res)=> {
    dispatch({...githubSuccessAction, payload:res.items})
  })
  .catch((err)=>{
    dispatch(githubFailureAction);
  })
}