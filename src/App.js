import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Home from './components/home/home'
import About from './components/about/about';

function App() {

  const [theme, setTheme] = useState(0);


  return (
    <React.Fragment> 
      <div className="App">
          <Router>
              <Routes>

                <Route exact path="/" element={<Home theme={theme} setTheme={setTheme}  />} />
                  
                <Route path="/about" element={<About theme={theme} setTheme={setTheme} />} />
                 
              </Routes>
          </Router>
      </div>
    </React.Fragment>
    
  );
}

export default App;
