import React, { useState,useEffect } from 'react';
import './App.css';
import SendRecieve from './components/SendRecieve'
import InputFile from './Pages/InputFile';
import Icon from './components/Icon';

import {BrowserRouter as Router,Route,Switch} from "react-router-dom";




// import Background from './components/Background';

function App() {

  const [lanIP,setLanIP] = useState('localhost');

  useEffect(() => {
    // Fetch the LAN IP address from your server
    fetch('/api/lanIP')
      .then((response) => response.json())
      .then((data) => {
        setLanIP(data.hostname);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error fetching LAN IP:', error);
        setLanIP('127.0.0.1');
      });
  }, []);


  const [buttonClicked, setButtonClicked] = useState(false);

  const handleButtonClick = ()=>{
    setButtonClicked(true);
  }


  return (
    
    <Router>
      <div className="App">
        <Icon/>
          <Route path='/' exact component={SendRecieve}>
              {/* <SendRecieve onButtonClick={handleButtonClick} /> */}
          </Route>
        <Switch>
          <Route path='/input-file' component={InputFile}>
              {/* <InputFile/> */}
          </Route>
        </Switch>
      </div>

      <h1>{lanIP}</h1>
    </Router>
  );


}

export default App;


