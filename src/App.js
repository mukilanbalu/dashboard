import React, { Component } from 'react';
import './style.css';
import Sidebar from './sidebar';
import User from './user';

import Nav from'./nav-bar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="row">
            <div className="col-12 d-flex  px-0">
                <div className="col-2 pr-0">
                    <Sidebar />
                    </div>
                    <div className="col-10 px-0">
                    <Nav/>
                    <div className="row">
                    <User />
                    
                    </div>
                    </div>
                </div>
            </div>
          </div>
   
     
    );
  }
}

export default App;
