import React from "react";
import { Link } from 'react-router-dom';
import { auth } from "../../Lib/Firebase/Firebase";
import "./Nav.css"
const Nav = () => {
  return ( 
    <header className="header">

      <nav className="Nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/SignIn">Sign In</Link></li>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/Booking">Book Now</Link></li>
          <li onClick={()=>{
            console.log("signed out")
            auth.signOut()}}>signout</li>
      </nav>

    </header>

   );
}
 
export default Nav;