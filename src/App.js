import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ManagerDashboard from './containers/ManagerDashboard/ManagerDashboard';


function App() {
  return (
    <Router>
      <Route path="/" exact component={ManagerDashboard} />
    </Router>
  );
}

export default App;
