import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
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
      showAlert('Dark Mode has been enabled','success');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
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
      <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode = {toggleMode} setGreenMode = {setGreenMode}/>
      <Alert alert = {alert}/>
      <div className='container'>
        <TextForm heading="Enter the text to analyze below" mode = {mode} showAlert = {showAlert}/>
        {/* <About /> */}
      </div>
   </>
  );
}

export default App;
