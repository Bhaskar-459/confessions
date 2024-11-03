import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import Main from './Main/Main';
import Credits from './Credits';
import UserDetails from './UserDetails';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Make a Confession</h1>
        <p className="quote">
          "Sometimes the words we don't say are the ones that mean the most. Share your heart and let the silence speak."
        </p>
      </header>
      <div className="content">
        {isLoggedIn ? <>
          <Main />
          <UserDetails />
        </> : <Login />}
      </div>
      <Credits />
    </div>
  );
}

export default App;


