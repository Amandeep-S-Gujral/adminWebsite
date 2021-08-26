import React from 'react'
import PrivateRoute from './components/general/PrivateRoute';
import LandingPage from './provider/landingPageProvides'
import ContentManagement from './provider/contentListProvider';
import ContentEditor from './provider/contentBodyProvider';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Route exact path='/' render={() => <LandingPage />} />
            <PrivateRoute path='/contentManagement' component={ContentManagement} />
            <PrivateRoute path='/contentEditor/:cid' component={ContentEditor} />
            {/* <Route path='/perview/article/:cid' render={routerProps => <PreviewArticle {...routerProps} />} /> */}
          </Router>
      </div>
    );
  }
}

export default App;
