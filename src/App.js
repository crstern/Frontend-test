import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState([]);
 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const result = await axios(
      'https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts',
    );
 
    setData(result.data);
  }, []);

  return (
    <div className="App">
      <div id="pageMask"></div>
      <div className="cards">
        {data.map(item => (
          <Card {...item}/>
        ))}
      </div>
    </div>
  );
}

export default App;
