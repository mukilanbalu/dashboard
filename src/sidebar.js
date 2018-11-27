import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props){
    super(props);
    this.menutoggle = this.menutoggle.bind(this);
  }
  menutoggle(e){
    // e.target.style.visibility = 'hidden';
    // e.target.style.visibility = 'hidden';
    document.body.classList.toggle('sidebar-show');
  }
  render() {
    return (
      <div className="sidebar col ">
     
        <div className="side-nav text-left ">
      
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            
                <a className="nav-link" id="menu-toggle" onClick={this.menutoggle} ref="menu"> <i className=" fa fa-bars"></i>  </a>

                {/* <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> Home <i className="fa fa-home"></i> </a>
                <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"> profile <i className="fa fa-user"></i> </a>
                <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"> File <i className="fa fa-file"></i> </a> */}
                <a className="nav-link" id="v-pills-recent-tab" data-toggle="pill" href="#v-pills-recent" role="tab" aria-controls="v-pills-recent" aria-selected="false"> Recent <i className="fa fa-clock"></i> </a>
                <a className="nav-link" id="v-pills-data-tab" data-toggle="pill" href="#v-pills-data" role="tab" aria-controls="v-pills-data" aria-selected="false"> Data <i className="fa fa-database"></i> </a>
                <a className="nav-link" id="v-pills-date-tab" data-toggle="pill" href="#v-pills-date" role="tab" aria-controls="v-pills-Date" aria-selected="false"> Events <i className="fa fa-calendar"></i> </a>
                <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"> settings <i className="fa fa-cog"></i> </a>
            </div>


        </div>
      </div>
    
    );
  }
}

export default Sidebar;
