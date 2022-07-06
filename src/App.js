import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from 'react-router-dom';
function App() {
  const [mode,setMode] = useState('light');//states whether dark mode is enabled or not

  const[alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500)
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161313';
      document.title = 'TextUtils - Dark Mode'
      showAlert('Dark Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode'
      showAlert("Light Mode has been enabled","success");
    }
  }
  const setGreenMode = () =>{
    if(mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor = '#23c178';
      showAlert('Green Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  
  return (
   <>  
   {/* because github deployment is not compatible with react router we are removing it.  */}
    {/* <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} setGreenMode = {setGreenMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
        <Routes>
          <Route exact path = "/about" element = {<About/>}>
          </Route>
          <Route exact path = "/"  element = {<TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/>}>
          </Route>
        </Routes>
      </div>
    </Router> */}
    <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode = {toggleMode} setGreenMode = {setGreenMode}/>
    <Alert alert = {alert}/>
    <TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/>
   </>
  );
}

export default App;
