import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = (props) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  return (
    <form className="signup-form">
      <div className="half-width">
        <div className="left-half">
          <label htmlFor="firstName">First Name</label>
          <input 
            name="firstName" 
            placeholder="First Name"
            value={user.firstName}
          />
        </div>
        <div className="right-half">
          <label htmlFor="lastName">Last Name</label>
          <input 
            name="lastName" 
            placeholder="Last Name"
            value={user.lastName}
          />
        </div>
      </div>
      <div className="full-width">
        <label htmlFor="email">Email</label>
        <input 
          name="email" 
          type="email" 
          placeholder="Email"
          value={user.email} 
        />
      </div>
      <div className="full-width">
        <label htmlFor="password">Password</label>
        <input 
          name="password" 
          type="password" 
          placeholder="Password"
          value={user.password}
        />
      </div>
      <input
        type="submit"
        value="Create Account"
      />
    </form>
  );
};

export default SignupForm;