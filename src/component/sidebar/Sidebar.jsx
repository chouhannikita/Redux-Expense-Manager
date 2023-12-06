import './Sidebar.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Logout } from '../../redux/action.jsx/action'
import { NavLink } from 'react-router-dom'
const login = (state)=>state.user
function Sidebar({children}) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const select = useSelector(login)
  const handleLogout= ()=>{
    dispatch(Logout())
    navigate("/")
  }
  return (
    
    <div className="container-box">
      {select.islogin &&
    <div className='side-box'>
      <ul>
        <NavLink to="/expenselist">
        <li className='listItem'>DashBoard</li>
        </NavLink>
        <NavLink to="add">
        <li className='listItem'>Add Expense</li>
        </NavLink>
        <NavLink to="/search">
        <li className='listItem'>
         Search Expense
        </li>
        </NavLink>
        <NavLink to="/profile">
        <li className='listItem'>Profile</li>
        </NavLink>
        <NavLink to="/" onClick={handleLogout}>
        <li className='listItem'>Logout</li>
        </NavLink>
      </ul>
    </div>
}
    <main className='child'>{children}</main>

    </div>
  )
}

export default Sidebar
