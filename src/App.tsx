import React from 'react';
import Menu from './components/Menu';
import Banner from './components/Banner';
import FontTester from './components/FontTester';
import Socials from './components/Socials';
import Copyright from './components/Copyright';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Publishing from './pages/Publishing';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Route path="/" exact component={Menu} />
        <Route path="/publishing" component={Publishing} />
        <Banner />
        <FontTester />
        <Menu />
        <Socials />
        <Copyright />
      </div>
    </Router>
  );
};

export default App;
