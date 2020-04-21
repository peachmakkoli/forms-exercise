import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = (props) => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const onFirstNameChange = (event) => {
    const newUser = {
      ...user,
      firstName: event.target.value,
    };

    setUser(newUser);
  };

  const onLastNameChange = (event) => {
    const newUser = {
      ...user,
      lastName: event.target.value,
    };

    setUser(newUser);
  };

  const onEmailChange = (event) => {
    const newUser = {
      ...user,
      email: event.target.value,
    };

    setUser(newUser);
  };

  const onPasswordChange = (event) => {
    const newUser = {
      ...user,
      password: event.target.value,
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
    <form className="signup-form">
      <div className="half-width">
        <div className="left-half">
          <label htmlFor="firstName">First Name</label>
          <input 
            name="firstName" 
            placeholder="First Name"
            value={user.firstName}
            onChange={onFirstNameChange}
          />
        </div>
        <div className="right-half">
          <label htmlFor="lastName">Last Name</label>
          <input 
            name="lastName" 
            placeholder="Last Name"
            value={user.lastName}
            onChange={onLastNameChange}
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
          onChange={onEmailChange}
        />
      </div>
      <div className="full-width">
        <label htmlFor="password">Password</label>
        <input 
          name="password" 
          type="password" 
          placeholder="Password"
          value={user.password}
          onChange={onPasswordChange}
        />
      </div>
      <input
        type="submit"
        value="Create Account"
        onClick={onFormSubmit}
      />
    </form>
  );
};

export default SignupForm;