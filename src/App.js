import React from 'react'
import LandingPage from './provider/landingPageProvides'
import ContentManagement from './provider/contentListProvider';
import{BrowserRouter as Router, Route } from 'react-router-dom'
import './css/app.css';

function App() {
  return (
    <div className="App">
     <Router>
       <Route exact path='/' render={() => <LandingPage />} />
       <Route path='/contentManagement' render={() => <ContentManagement />} />
     </Router>
    </div>
  );
}

export default App;
