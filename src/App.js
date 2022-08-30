// import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#28292e';
      showalert("Dark mode has been enabled", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Router> */}
      {/* <Navbar title="TextUtils" aboutText= "About TextUtils"/> */}
      <Navbar title='TextUtils' mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-3'>
            {/* ffhfhgfhdhg  */}
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/"> */}
            <TextForm showalert={showalert} heading="Enter your text to analyze" mode={mode} />
          {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
