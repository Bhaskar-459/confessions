import React, { useState, useEffect } from 'react';
import Login from './Login/Login';
import Main from './Main/Main';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check local storage to see if the user is logged in
    const username = localStorage.getItem('username');
    if (username) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Main /> : <Login />}
    </div>
  );
}

export default App;

