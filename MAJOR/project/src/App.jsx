import React, { useState } from 'react'; // Added useState import
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import MyProfile from './components/MyProfile';
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Added useState

  const handleLogout = () => {
    setIsAuthenticated(false);
    return <Navigate to="/" />;
  };

  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="Navbar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li> {/* Corrected path */}
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/myprofile">MyProfile</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} />} />
          <Route path="/signup" element={<Signup />} /> {/* Corrected path */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <PrivateRoute path="/myprofile" element={<MyProfile />} isAuthenticated={isAuthenticated} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
