import React, { useState } from 'react';
import MyConfessions from '../Confessions/MyConfessions.js';
import SendConfession from '../Confessions/SendConfession.js';
import './Main.css';

const Main = () => {
  const [activeTab, setActiveTab] = useState('myConfessions');

  return (
    <div className="main-container">
      <div className="tab-buttons">
        <button
          className={activeTab === 'myConfessions' ? 'active' : ''}
          onClick={() => setActiveTab('myConfessions')}
        >
          My Confessions
        </button>
        <button
          className={activeTab === 'sendConfession' ? 'active' : ''}
          onClick={() => setActiveTab('sendConfession')}
        >
          Send Confession
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'myConfessions' && <MyConfessions />}
        {activeTab === 'sendConfession' && <SendConfession />}
      </div>
    </div>
  );
};

export default Main;
