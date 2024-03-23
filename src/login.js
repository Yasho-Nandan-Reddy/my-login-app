import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login() {
  const [isSignInActive, setSignInActive] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const history = useNavigate();

  const handleToggle = () => {
    setSignInActive(!isSignInActive);
  };

  const handleChange = (e) => {
    const { name, value,password} = e.target;
    console.log(e.target.value)
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"name" : "nandu",})
      });
      console.log(formData)
      const data = await response.json();
      console.log(data);
      // Redirect to home page after successful sign-up
      history.push('/home');
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className={`container ${isSignInActive ? '' : 'active'}`}>
      <div className={`form-container ${isSignInActive ? 'sign-in' : 'sign-up'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isSignInActive ? 'Sign In' : 'Create Account'}</h1>
          <div className="social-icons">
            {/* Your social icons */}
          </div>
          {isSignInActive ? (
            <span>or use your email password</span>
          ) : (
            <span>or use your email for registration</span>
          )}
          {!isSignInActive && <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />}
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          {isSignInActive && <a href="#">Forget Your Password?</a>}
          <button type="submit">{isSignInActive ? 'Sign In' : 'Sign Up'}</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className={`toggle-panel toggle-left ${isSignInActive ? 'active' : ''}`}>
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={handleToggle}>Sign In</button>
          </div>
          <div className={`toggle-panel toggle-right ${!isSignInActive ? 'active' : ''}`}>
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" onClick={handleToggle}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
