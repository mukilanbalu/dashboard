import React, { Component } from 'react';
import Udetails from './udetails';
import Add from './Add';
var user;
var contact;
var indx;
class User extends Component {
    
    constructor(props){
        super(props);
        this.state = {
                name:"",
                email:"",
                number:"",
                Company:"",
                address:"",
                image:"",
                clicked: false,
                valid:false,
                submit:"",
                index:0,
            contact:[
                    {
                        name:" Mike Huston",
                        email:" MikeHuston@live.com",
                        number:123456,
                        Company:"Estra Botuquie ltd.",
                        address:"westworld",
                        image:""
                    }
                ]
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.saveContact=this.saveContact.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.setsubmit=this.setsubmit.bind(this);
      }

      
      setsubmit(){
          this.setState({submit:"add"});
          console.log(this.state.submit);
       
      }
      addContact(obj){

 
          user = Object.assign({}, this.state.contact);    //creating copy of object
          var arr = this.state.contact;
          var user = obj;
          arr.push(user);        
          this.setState({
          contact: arr
          });
      
      
    
    }

    editContact(index){
        this.setState({submit:""});
        this.setState({index});
        console.log(this.state.submit);
    }
    
    deleteContact(index){
        console.log(index);
        let newcontact = this.state.contact;
            newcontact.splice(index,1);
            this.setState({contact : newcontact});
           
    }
    
    
    saveContact(obj){
       
        user = Object.assign({}, this.state.contact);    //creating copy of object
        var arr = this.state.contact;
       var user = obj;
    //   console.log(user);
       arr[this.state.index] = user;   
//    console.log(arr);
     this.setState({ m : user });

    }
  
       
        
       
      handleClick(index){
          this.setState({ clicked : !this.state.clicked});
          this.setState({index : index});

              }
   

  render() {
  
    return (    
     
        
        // User list display
        <div className="col d-flex">
     <div className="User col-lg-5 text-left pt-5 pl-5 pr-2 mr-3 pb-0">

      {/* <input type="text" value={this.state.name}  /> */}
         <div className="tab-content" id="v-pills-tabContent">
            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                <div className="">
                    <div className="section-Title ">
                    <div className="d-flex mt-4 contact-title">
                    <h5><i className="fa fa-address-book mr-2" aria-hidden="true"></i> Contacts <br/>
                    <p className="pl-4 sub-title" >
                        Welcome to FlatCRM Products & Service page
                     </p>
                    </h5> 
                    
                    <p className=" mr-2 pl-3">Sort by</p> 
                    <div className="dropdown open">
                        <i className="btn btn-sm plain-btn  dropdown-toggle"  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                    Date Created
                                </i>
                        <div className="dropdown-menu" aria-labelledby="triggerId">
                            <button className="dropdown-item" href="#">Action</button>
                            <button className="dropdown-item " href="#">action 2</button>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                </div>
                <div className="add-section mb-5">
                <div className="input-group search ">
                                        <input type="text" className="form-control search-input" placeholder="search Contacts "/>
                                        <div className="input-group-append ">
                                            <span className="input-group-text search-icon "><i className="fa fa-search "></i></span>
                                        </div>
                                         <button type="button" className="btn btn-md px-3 py-2  add-btn" data-toggle="modal" data-target="#myModal"
                                         onClick={this.setsubmit} > <i className="fa fa-plus mr-1" aria-hidden="true"
                                         ></i> Add Contact </button> 
                                </div>
                </div>

            {/* contact table */}
                <div className="table-section">
                 <table className="table">
                    <thead className="thead-light">
                        <tr>
                        
                        <th scope="col">Basic Info</th>
                        <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>

                   {/* display users */}
                    {  this.state.contact.map((data,index) =>
                        <tr className="" onClick={()=>this.handleClick(index)} className={(this.state.index === index ) ? 'bg-dark' : 'bg-light'}   key={index} >
                      
                        <td>
                            <div className="d-flex align-items-center">
                           
                                <img className="user-img img-fluid mr-2" src= {data.image}></img>
                                
                            <div className="user-info">
                              <p> {data.name} <br/>
                                  <span className="sub-title"> {data.email}</span>
                              </p>
                              
                            </div>
                            </div>
                          
                        </td>
                        <td className= "d-flex align-item-center">{data.Company}
                            <i className="far fa-edit btn  p-0 mx-1"  onClick={() => this.editContact(index)} data-toggle="modal" data-target="#myModal"  aria-hidden="true"></i>
                            <i className="far fa-times-circle btn p-0 mx-1" onClick={() => this.deleteContact(index)} aria-hidden="true"></i>
                        </td>
                            
                        </tr>
                    )}
                    </tbody>
                </table>

                </div>
           
            </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-recent" role="tabpanel" aria-labelledby="v-pills-recent-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-data" role="tabpanel" aria-labelledby="v-pills-data-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-date" role="tabpanel" aria-labelledby="v-pills-date-tab">...</div>
                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div>

                
                
                
               
                </div>

                    <Add user={this.state.contact[this.state.index]} index={this.state.index} addContact={this.addContact} saveContact={this.saveContact} submit={this.state.submit} />
                <Udetails user={this.state.contact[this.state.index]} />
                

             </div>
   
     
    );
  }
}

export default User;
