import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ManagerDashboard from './components/ManagerDashboard';


function App() {
  return (
    <Router>
      <Route path="/" exact component={ManagerDashboard} />
    </Router>
  );
}

export default App;
