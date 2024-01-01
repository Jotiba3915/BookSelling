import React from 'react';
import "./Login.css";
import AuthBgImg from "../../Assets/auth-bg.jpg";
import Navbar from '../../Components/Layouts/Navbar/Navbar';
import AuthForming from '../../Components/Forms/authForm/AuthForming';

const Login = () => {
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
                <h2> Login</h2>
                <p>SignIn account email and password</p>

                <AuthForming buttonName ="Login"/>

              </div>
            </div>
          </div>
        </section>
    </React.Fragment>
  
  )
}

export default Login;