const initialData = {
  user: [],
  loginSucces: false,
  islogin : false
};

export function userReducer(state = initialData, action) {
  switch (action.type) {
    case "addUser":
      return {
       
        user: [...state.user, action.users],
      };
    case "fetchuser":
      return {
        ...state,
        
      };
    case "showuser":
      return {
        ...state,
        user: action.payload,
      };
    case "login":
      const user = [...state.user];
      const findUser = user.filter(
        (list) =>
        list.email === action.payload.email &&
        list.password === action.payload.password
        );
        if (findUser.length > 0) {
          state.loginSucces = true
          state.islogin = true
          
        } else {
          state.loginSucces = false;
          state.islogin = false
        }
        return {
          ...state,
         
      };
      case 'loginEx':
        return{
          islogin : true
        }
      case 'logout':
        return{
          islogin:false
        }

    default:
      return state;
  }
}
