// src/components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store';

const Logout = ({ history }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    history.push('/login');
  };

  return (
    <div>
      <h2>Welcome! You are logged in.</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
