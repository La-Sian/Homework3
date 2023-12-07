
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store';

// Login functional component
const Login = ({ history }) => {
  // Initialise state variables for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the username and password are correct
    if (username === 'user' && password === 'password') {
      // Dispatch the loginSuccess action
      dispatch(loginSuccess());
      // Redirect to the '/logout' route on successful login
      history.push('/logout');
    } else {
      // Redirect to the '/login-unsuccessful' route on unsuccessful login
      history.push('/login-unsuccessful');
    }
  };

  // Render the Login component
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for username */}
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        {/* Input field for password */}
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        {/* Submit button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
