import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import  NotFound  from './components/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import User from './components/users/User';
function App() {
  return (
    <Router>
    <div className="App">
  <Navbar/>
      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
       <Route exact path='/users/add'>
       <AddUser/>
       </Route>
       <Route exact path='/users/edit/:id'>
       <EditUser/>
       </Route>
       <Route exact path='/users/view/:id'>
       <User/>
       </Route>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route>
        <NotFound/>
        </Route>
  
      </Switch>
    </div>
  </Router>
  );
}

export default App;
