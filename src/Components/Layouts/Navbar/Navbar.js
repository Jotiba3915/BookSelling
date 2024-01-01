import React, {useContext} from 'react';
import "./Navbar.css";
import{Link, useNavigate} from "react-router-dom";
import {UserContext} from "../../../App";
import {ReactComponent as Cart} from '../../../Assets/cart.svg';
import { getAuth, signOut } from 'firebase/auth';
import app from "../../../firebase/Firebase";

const Navbar = ({darkTheme, darkText}) => {

  const user = useContext(UserContext);

  const auth = getAuth(app);
  const navigate = useNavigate();

  const handleLogout = () =>{
    signOut(auth).then(() =>{
      navigate('/');
    })
    .catch((err) =>{

    })
  }

  const showLoginandSignUp = (
    <nav className='nav-links-container'>
      <Link to="/" className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Home</Link>
      <Link to="/Books" className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Books</Link>
      <Link to="/Login" className= {`${darkText ? `nav-links-dark` : `nav-links`}`}>Login</Link>
      <Link to="/Signup" className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Signup</Link>
    </nav>
  )

  const showLogoutAndCart = (
    <nav className='nav-links-container'>
      <Link to="/" className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Home</Link>
      <Link to="/Books" className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Books</Link>
      <a onClick={handleLogout} className={`${darkText ? `nav-links-dark` : `nav-links`}`}>Logout</a>
      <Link to="/cart" className="cart-link"><Cart/></Link>
    </nav>
  )
  return (
  <section className={ `navbar-container ${ darkTheme ? 'background-dark relative' : 'background-transparent'} ` }>
        <div className="Container flex justify-between align-center">
            <a href="#" className="logo">Book<span className="text-primary">worm</span></a>

           {user ? showLogoutAndCart : showLoginandSignUp }
        </div>
  </section>
  )
}

export default Navbar;