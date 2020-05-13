import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import './App.css';
import Users from './components/Users.js'
import UserDetails from "./components/UserDetails";
import Post from "./components/Post"
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
            <React.Fragment>
            <Navbar />
            <Switch>
                  <Route path ="/" exact component={Home}/>
                  <Route path ="/users" exact component={Users}/>
                  <Route path ="/:id" exact component={Post}/> 
                  <Route path ="/users/:id" exact component={UserDetails}/> 
            </Switch> 
            </React.Fragment> 
      </Router>
    </div>
  );
}

export default App;
