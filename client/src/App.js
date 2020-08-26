import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchContainer from "./components/SearchContainer";
import SavedContainer from "./components/SavedContainer";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={SearchContainer} />
      <Route exact path="/saved" component={SavedContainer} />
    </Router>
  )
}

export default App;
