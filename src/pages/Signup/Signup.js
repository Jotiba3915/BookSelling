import React from 'react';
import "./Signup.css";
import AuthBgImg from "../../Assets/auth-bg.jpg";
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import AuthForming from '../../Components/Forms/authForm/AuthForming';

const Signup = () => {
  return (
    <React.Fragment>
      <Navbar darkText ={true}/>
        <section className="signup-container">
          <div className="signup-img-container">
            <img src={AuthBgImg} alt="authentication-background" />
          </div>
          <div className="signup-content-container">
            <div className="container">
              <div className="content-wrapper">
                <h2> Signup</h2>
                <p>Create a new account email and password</p>

                <AuthForming buttonName="Sign Up"/>
              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  
  )
}

export default Signup;