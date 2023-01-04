// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import { light } from '@mui/material/styles/createPalette';
// import About from './components/About'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setMode] = useState("light");
  const [alert,setALert] = useState(null)

  const showAlert = (message,type) =>{
     setALert({
      msg:message,
      type:type
     })
     setTimeout(() =>{
        setALert(null);
     },2000)
  }
  const togglemode =() =>{
    if(mode=== 'light'){
      setMode('dark')
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success")
      document.title= "TextUtils - Dark Mode"
      // setInterval(()=> {
      //   document.title= "TextUtils is Amazing "
      // },2000)

      // setInterval(()=> {
      //   document.title= " Install TextUtils"
      // },1500)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success")
      document.title= "TextUtils - Light Mode"
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title= "TextUtils"  mode = {mode} togglemode={togglemode}/>
    <Alert alert={alert}/>
    <div className='container my-3' >
    
     {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode = {mode}/> 
          {/* </Route>
        </Switch> */}
    
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
