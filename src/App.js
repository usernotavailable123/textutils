import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode,setMode] = useState('light');//states whether dark mode is enabled or not
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#161313';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
   <>   
      <Navbar title="TextUtils" aboutText="About Text" mode={mode} toggleMode = {toggleMode}/>
      <div className='container'>
        <TextForm heading="Enter the text to analyze below" mode = {mode}/>
        {/* <About /> */}
      </div>
   </>
  );
}

export default App;
