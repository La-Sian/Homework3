// src/components/LoginUnsuccessful.js
import React from 'react';

const LoginUnsuccessful = ({ history }) => {
  const handleBackToLogin = () => {
    history.push('/login');
  };

  return (
    <div>
      <h2>Login Unsuccessful</h2>
      <p>Incorrect username or password.</p>
      <button onClick={handleBackToLogin}>Back to Login</button>
    </div>
  );
};

export default LoginUnsuccessful;
