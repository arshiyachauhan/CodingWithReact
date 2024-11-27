import React, { useState } from "react";
import "./FormLogin.css"; 

const FormLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          <form className="login-form">
            <h2>Login Form</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="form-button">
              Login
            </button>
            <div className="signup-text">
              Not a member?{" "}
              <a href="#" onClick={toggleForm}>
                Signup now
              </a>
            </div>
          </form>
        ) : (
          <form className="signup-form">
            <h2>Signup Form</h2>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" required />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm password" required />
            </div>
            <button type="submit" className="form-button">
              Signup
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default FormLogin;
