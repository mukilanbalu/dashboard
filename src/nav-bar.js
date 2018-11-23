import React, { Component } from 'react';
class Nav extends Component {
    render() {
      return (
        
        <nav className="navbar navbar-light bg-light ">
               
               <a className="nav-item  " href="#">
               <i className="fa fa-search nav-search" aria-hidden="true"></i> </a>
 
                 <div className=" d-flex align-items-center ml-auto">
                 <a className="nav-item mx-2" href="#">+ Add</a>
                               <a className="nav-item mx-2" href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                               <i className="nav-item mx-2" href="#"> 
                                 <div className="dropdown show">
                                   <a className=" nav-item btn dropdown-toggle plain-btn" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                   Mark Henry
                                 
                                   </a>
                                 
                                   <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                     <a className="dropdown-item" href="#">Action</a>
                                     <a className="dropdown-item" href="#">Another action</a>
                                     <a className="dropdown-item" href="#">Something else here</a>
                                   </div>
                                 </div>
                                 
                               </i>
                               <a className="nav-item nav-link" href="#"><button type="button" className="btn btn-light ">
                               <i className="fa fa-bell" aria-hidden="true"></i> <span className="badge badge-light"></span>
                 <span className="sr-only">unread messages</span>
               </button></a>
                 </div>
               </nav>
        
       
      );
    }
}
export default Nav;