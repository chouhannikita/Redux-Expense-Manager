
const initialData = {
  expense : [],
  searchItem :[],
  isSearch : false,
  loading : false
}

export const expenseReducer = (state=initialData,action) =>{
  switch(action.type){
    case 'fetchexpense':
      return {
         ...state,
         loading : true
      }
      case 'expensesucees':
      return {
         expense : action.payload,
         loading : false
      }
    case "addexpense":
      return{
        ...state,
        expense : [...state.expense,action.payload]
      }
    case "deleteexpense":

      return {
        expense: state.expense.filter((item) =>  item.id !== action.payload)
      }
    case 'search':
      return {
        ...state,
        isSearch : true,
        searchItem : state.expense.filter((item) =>  item.desc === action.payload)
      }
    case 'searchType':
      return {
        ...state,
        isSearch : true,
        searchItem : state.expense.filter((item) => item.type.toLowerCase() === action.payload.toLowerCase())
      }
      case 'searchYear':
        let searchlist = state.searchItem
        const d = new Date()
        const yearCurrent = d.getFullYear();
        
        if(action.payload === 'current_year'){
          searchlist =  state.expense.filter((item) => 
           new Date(item.date).getFullYear() === yearCurrent
          )
        }
          else{
            searchlist =  state.expense.filter((item) => 
            new Date(item.date).getFullYear() !== yearCurrent
           )
          
        }
        return {
          ...state,
          isSearch : true,
          searchItem : searchlist
        }
        case "searchorder":
          let list = state.expense
          if(action.payload === 'asc'){
           list =  state.expense.reverse()
          }
          else{
            list = state.expense.reverse(false)
          }   
          return {
            ...state,
            isSearch : true,
            searchItem : list
          }
    default :
       return state
  }
}