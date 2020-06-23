import React from 'react';
import './App.css';
import PageLayout from './components/PageLayout';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <PageLayout />
      </Router>
    </div>
  );
}

export default App;
