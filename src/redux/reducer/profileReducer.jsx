const initialData = {
  profile : []
}

export const profileReducer = (state=initialData,action)=>{
  switch(action.type){
     case "fetchprofile":
      return{
        ...state
      }
      case "successprofile":
        return{
          ...state,
          profile : action.payload
        }
      case "addprofile":
        return{
          profile : [...state.profile,action.payload]
        }
      default:
        return state
  }
}