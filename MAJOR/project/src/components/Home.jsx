import React from 'react';


const Home = ({ isAuthenticated, handleLogout }) => {
  return (
    <div className="Home"> {/* Make sure this class is defined in App.css */}
      <h1>Welcome to our World to the HomePage</h1>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <p>Please login to access your profile</p>
      )}
    </div>
  );
};

export default Home;
