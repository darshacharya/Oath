import React, { useState, useEffect } from 'react';
import EmployeeOfTheMonth from './components/EmployeeOfTheMonth';
import OfficeNews from './components/OfficeNews';
import Quotes from './components/Quotes';
import OathPopup from './components/OathPopup';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [oathCount, setOathCount] = useState(0);

  useEffect(() => {
    const ws = new WebSocket('ws://your-websocket-server-url');
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'OATH_TAKEN') {
        setShowPopup(true);
        setOathCount(data.count);
      }
    };
    return () => ws.close();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Office Dashboard</h1>
      </header>
      <main>
        <EmployeeOfTheMonth />
        <OfficeNews />
        <Quotes />
      </main>
      {showPopup && <OathPopup count={oathCount} onClose={() => setShowPopup(false)} />}
    </div>
  );
}

export default App;
