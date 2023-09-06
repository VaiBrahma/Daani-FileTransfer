import React, { useState } from 'react';
import './App.css';
import SendRecieve from './components/SendRecieve'
import InputFile from './Pages/InputFile';
import Icon from './components/Icon';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
// import Background from './components/Background';

function App() {

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
    </Router>
  );
}

export default App;


