// Import dependencies and components
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'; // import the Redux store
import Login from './components/Login'; // import the login component
import Logout from './components/Logout'; // import the logout component
import LoginUnsuccessful from './components/LoginUnsuccessful'; // import loginUnsuccessful component
import './App.css'; // Import the CSS file for styling

// Define the main App component
const App = () => {
  return (
    // Provide the Redux store to the entire application using the Provider component
    <Provider store={store}>
      {/* Set up the Router component for managing navigation */}
      <Router>
        {/* make routes using the Routes component */}
        <Routes>
          {/* route for the Login component */}
          <Route path="/login" element={<Login />} />
          {/* route for the Logout component */}
          <Route path="/logout" element={<Logout />} />
          {/* route for the LoginUnsuccessful component */}
          <Route path="/login-unsuccessful" element={<LoginUnsuccessful />} />
        </Routes>
      </Router>
    </Provider>
  );
};


export default App;
