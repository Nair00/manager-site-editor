import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import Reports from './pages/Reports';
import Database from './pages/Database';
import Menubar from './components/Menubar';

var colorCodes = {
  backDark: "#1c2237",
  backLight: "#f7f8fa",
  accent: "#276afb",
  active: "#f00946"
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Menubar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/database' component={Database} />
        </Switch>
      </Router>
    </>
  );
}

export default App;