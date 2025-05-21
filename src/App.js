import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'

let name = "Chiru"
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'success');
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert}></TextForm>} />
          </Routes>
        </div>

      </Router>

    </>
  );
}

export default App;
