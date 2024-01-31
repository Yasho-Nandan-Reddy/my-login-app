
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [isSignInActive, setSignInActive] = useState(true);
  const history = useNavigate();

  const handleToggle = () => {
    setSignInActive(!isSignInActive);

    // Redirect to '/home' when switching to sign-in
    if (!isSignInActive) {
      history('/home');
    }
  };

  return (
    <div className={`container ${isSignInActive ? '' : 'active'}`}>
      <div className={`form-container ${isSignInActive ? 'sign-in' : 'sign-up'}`}>
        <form>
          <h1>{isSignInActive ? 'Sign In' : 'Create Account'}</h1>
          <div className="social-icons">
            {/* Your social icons */}
          </div>
          {isSignInActive ? (
            <span>or use your email password</span>
          ) : (
            <span>or use your email for registration</span>
          )}
          {!isSignInActive && <input type="text" placeholder="Name" />}
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {isSignInActive && <a href="#">Forget Your Password?</a>}
          <button onClick={handleToggle}>
            {isSignInActive ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
        <div className={`toggle-panel toggle-left ${isSignInActive ? 'active' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={handleToggle}>
              Sign In
            </button>
          </div>
          <div className={`toggle-panel toggle-right ${!isSignInActive ? 'active' : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" onClick={handleToggle}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



