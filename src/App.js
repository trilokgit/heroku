import React from 'react';
import './App.css';
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Home from './commonents/Home'
import Contact from './commonents/Contact'
import About from './commonents/About'
import Navbar from './commonents/Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import NotFound from './commonents/NotFound';
import AddUser from './commonents/AddUser';
import EditUser from './commonents/EditUser';
import User from './commonents/User';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path="/users/add" component={AddUser}/>
          <Route exact path="/users/edit/:id" component={EditUser}/>
          <Route exact path="/users/view/:id" component={User}/>
          <Route component={NotFound} />
        
        </Switch>  
    </div>
    </Router>
  );
}

export default App;
