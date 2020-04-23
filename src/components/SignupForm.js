import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = (props) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onInputChange = (event) => {
    const { name, value } = event.target
    
    const newUser = {
      ...user,
      [name]: value,
    };

    setUser(newUser);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    
    if (user.firstName !== '' && user.lastName !== '' && user.email !== '' && user.password !== '') {
      console.log(user);

      setUser({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    };
  };

  return (
    <form className="signup-form" onSubmit={onFormSubmit}>
      <div className="half-width">
        <div className="left-half">
          <label htmlFor="firstName">First Name</label>
          <input 
            name="firstName" 
            placeholder="First Name"
            value={user.firstName}
            onChange={onInputChange}
          />
        </div>
        <div className="right-half">
          <label htmlFor="lastName">Last Name</label>
          <input 
            name="lastName" 
            placeholder="Last Name"
            value={user.lastName}
            onChange={onInputChange}
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
          onChange={onInputChange}
        />
      </div>
      <div className="full-width">
        <label htmlFor="password">Password</label>
        <input 
          name="password" 
          type="password" 
          placeholder="Password"
          value={user.password}
          onChange={onInputChange}
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