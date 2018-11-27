import React, { Component } from 'react';
import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import Files from'./file';
import Profile from './profile';
import Home from './home';
import User from './user';
import Nav from'./nav-bar';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="row">
            <div className="col-12 d-flex  px-0 h-100">
                    <div className="col-12 px-0">
                    <Nav/>
                    <Router>
                    <div className="comp d-flex">
                    
                    <div className="sidebar nav flex-column nav-pills">
                      <ul className="list-unstyled text-left p-3">
                        <li className="nav-link" >
                          <Link to="/home">Home</Link>
                        </li> 
                        <li className="nav-link " >
                          <Link to="/user">dashboard <i className="fa fa-database mr-0"></i> </Link>
                        </li>
                        <li className="nav-link " >
                          <Link to="/profile">profile <i className="fa fa-user"></i></Link>
                        </li>
                        <li className="nav-link " >
                          <Link to="/file">File <i className="fa fa-file"></i></Link>
                        </li>
                    </ul>
                  </div>
                   
                      <Route exact path="/home" component={Home}/>
                      <Route  path="/user" component={User}/>
                      <Route path="/profile" component={Profile}/>
                      <Route path="/file" component={Files}/>
                 </div>
                    </Router>
                    </div>
                   
                </div>
            </div>
          </div>
   
     
    );
  }
}

export default App;
