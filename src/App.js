import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import './App.css';
import Users from './components/Users.js'
import UserDetails from "./components/UserDetails";
import Post from "./components/Post";
import Albums from "./components/Albums";
import Corousel from "./components/Corousel";
import store from "./redux/store";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import { Provider } from "react-redux";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/users" exact component={Users} />
              <Route path="/albums" exact component={Albums} />
              <Route path="/albums/:id" exact component={Corousel} />
              <Route path="/:id" exact component={Post} />
              <Route path="/users/:id" exact component={UserDetails} />

            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
