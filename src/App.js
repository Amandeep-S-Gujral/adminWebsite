import React from 'react'
import LandingPage from './provider/landingPageProvides'
import{BrowserRouter as Router, Route } from 'react-router-dom'
import './css/app.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Route to='/' render={() => <LandingPage />} />
     </Router>
    </div>
  );
}

export default App;
