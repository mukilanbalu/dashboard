import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import App from './App'
class Welcome extends Component{
    render()
    {
    return(
        <div className="col">
        
       < Router>
       <div>
      <h1>Welcome   <Link to="/App">App</Link>  </h1>
     
      <Route exact path="/App" component={App}></Route>
      </div>
      </Router>
      </div>
    );
}
}

export default Welcome;