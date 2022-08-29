import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'; 
// import About from './components/About'; 
import TextForm from './components/TextForm'; 

function App() {
  const [mode, setmode] = useState('dark');

  const togglemode = ()=>{
    if (mode==='light') {
      setmode('dark');
      document.body.style.backgroundColor= '#28292e';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor= 'white';

    }
  }
  return (
    <>
  {/* <Navbar title="TextUtils" aboutText= "About TextUtils"/> */}
  <Navbar title ='TextUtils' mode={mode} togglemode={togglemode}/>
  <div className='container'>
  <TextForm heading="Enter your text to analyze" mode={mode}/>
  {/* <About/> */}
  </div>
  </>
    );
}

export default App;
