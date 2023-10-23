import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo"> <Link to='/' style={{textDecoration:'none',color:'#fff'}} >Bike booking</Link> </span>
        <div className="navItems">
        <button className="headerBtn"> <Link to='/login' > Sign In </Link>/ <Link to='/register' > Register</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar