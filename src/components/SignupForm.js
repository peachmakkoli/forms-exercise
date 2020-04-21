import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = (props) => {

  return (
    <form className="signup-form">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
      </div>
      <input
        type="submit"
        value="Create Account"
      />
    </form>
  );
};

export default SignupForm;