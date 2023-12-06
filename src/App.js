import './App.css';
import { Route,Routes } from 'react-router-dom'
import Signup from './component/register.jsx/Signup';
import Login from './component/login/Login';
import Addexpense from './component/expense-form/AddExpense'
import Sidebar from './component/sidebar/Sidebar';
import Expensetable from './component/expense-list/Expensetable';
import SearchExpense from './component/search-expense/SearchExpense';
import Profile from './component/profile/Profile';
import { useSelector } from 'react-redux';

const data = (state)=>state.user.islogin
function App() {
const login = useSelector(data)
  return (
    <div className='App'>
      <Sidebar>
      <Routes>
        
        <Route path='/register' element={<Signup/>}/>
        <Route path='/' element={login ? <Expensetable/>:<Login/>}/>
        <Route path='/expenselist' element={<Expensetable/>}/>
        <Route path='/add' element={<Addexpense/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/search' element={<SearchExpense/>}/>
        <Route path='/profile' element = {<Profile/>}/>

      </Routes>
    </Sidebar>
    </div>
  );
}

export default App;
