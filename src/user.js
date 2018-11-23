import React, { Component } from 'react';
var user;
var contact;
var indx;
class User extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            contact:[
                    {
                        name:" Mike Huston",
                        email:" MikeHuston@live.com",
                        number:123456,
                        Company:"Estra Botuquie ltd.",
                        address:"westworld"
                    }
                ]
        
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.saveContact=this.saveContact.bind(this);
        
      }
      addContact(e){
          e.preventDefault();
          user = Object.assign({}, this.state.contact);    //creating copy of object
        var arr = this.state.contact;
           
          user = {
                name: e.target.user.value,
                email:e.target.email.value,
                number:e.target.numb.value,
                Company:e.target.cname.value,
                address: e.target.address.value    
          }
          arr.push(user);        
        //   this.setState({user});                       //updating value
        this.setState({
            contact: arr
          });
          
         
      }
      
      

    editContact(index){
        
        user = {
            name:this.state.contact[index].name,
            email:this.state.contact[index].email,
            number:this.state.contact[index].number,
            Company:this.state.contact[index].Company,
            address: this.state.contact[index].address, 
        }
        indx=index;
   console.log(indx);
           
    }
    
    deleteContact(index){
        let newcontact = this.state.contact;
            newcontact.splice(index,1);
            this.setState({contact : newcontact});
            console.log(this.state.contact);
    }
    
    
    saveContact(e){
        e.preventDefault();
        user = Object.assign({}, this.state.contact);    //creating copy of object
        var arr = this.state.contact;
        user = {
            name: e.target.user.value,
            email:e.target.email.value,
            number:e.target.numb.value,
            Company:e.target.cname.value,
            address: e.target.address.value    
      }
      console.log(user);
       arr[indx] = user;       
     this.setState({ m : user });
     console.log(this.state.contact);
    }


  render() {
    return (                                     
        // User list display
     <div className="User col-lg-5 text-left pt-5 pl-5 pr-2 mr-3 pb-0">
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
                                         <button type="button" className="btn btn-md px-3 py-2  add-btn" data-toggle="modal" data-target="#myModal" > <i className="fa fa-plus mr-1" aria-hidden="true"></i> Add Contact </button> 
                                </div>
                </div>

            {/* contact table */}
                <div className="table-section">
                 <table className="table">
                    <thead className="thead-light">
                        <tr>
                        <th scope="col"> <button className="btn"><i className="fa fa-plus" aria-hidden="true"></i></button> </th>
                        <th scope="col">Basic Info</th>
                        <th scope="col">Company</th>
                        </tr>
                    </thead>
                    <tbody>

                   {/* display users */}
                    {  this.state.contact.map((data,index) =>
                        <tr key={index} >
                        <th scope="row" > <input type="checkbox" aria-label="Checkbox for following row"></input></th>
                        <td>
                            <div className="d-flex align-items-center">
                           
                                <img className="user-img img-fluid mr-2" src="https://via.placeholder.com/150"></img>
                          
                            <div className="user-info">
                              <p> {data.name} <br/>
                                  <span className="sub-title"> {data.email}</span>
                              </p>
                              
                            </div>
                            </div>
                          
                        </td>
                        <td className= "d-flex align-item-center">{data.Company}
                       
                            <i className="btn fa fa-pen p-0 mx-1"  onClick={() => this.editContact(index)} data-toggle="modal" data-target="#upModal"  aria-hidden="true"></i>
                            <i className="btn fa fa-times p-0 mx-1" onClick={() => this.deleteContact(index)} aria-hidden="true"></i>
                           
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

 
                <div className="modal fade" id="myModal">
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Add Contact</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                    
                        <div className="modal-body">
                        <form onSubmit={this.addContact} className="p-2" >
                            <input type="text" name="user" placeholder="Full name" className="form-control" id="usr"/>
                            <input type="email" name="email" placeholder="Email id" className="form-control" id="email"/>
                            <input type="number" name="numb" placeholder="tel number" className="form-control" id="numb"/>
                            <input type="text" name="cname" placeholder="Company name" className="form-control" id="cname"/>
                            <input type="text" name="address" accept="image/gif,image/jpeg" placeholder="address" className="form-control" id="address"/>
                            <input type="file" name="user" className="add-btn" name="fileupload" id="fileupload"/>
                            <div className="modal-footer">
                            <button type="button submit" value="Submit" className="btn btn-secondary">Add</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                           
                         </form>
                        </div>
                        

                    </div>
                    </div>
                </div>
                {/* modal end */}
                
                
                <div className="modal fade" id="upModal">
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">Add Contact</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                    
                        <div className="modal-body">
                        <form onSubmit={this.saveContact} className="p-2" >
                            <input type="text" name="user" placeholder="Full name" className="form-control" id="usr"/>
                            <input type="email" name="email" placeholder="Email id" className="form-control" id="email"/>
                            <input type="number" name="numb" placeholder="tel number" className="form-control" id="numb"/>
                            <input type="text" name="cname" placeholder="Company name" className="form-control" id="cname"/>
                            <input type="text" name="address" placeholder="address" className="form-control" id="address"/>
                            <input type="file" name="user" accept="image/gif,image/jpeg" className="add-btn" name="fileupload" id="fileupload"/>
                            <div className="modal-footer">
                            <button type="button submit" value="Submit"  className="btn btn-secondary">Update</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                           
                         </form>
                        </div>
                        

                    </div>
                    </div>
                </div>
                {/* modal end */}
             </div>
   
     
    );
  }
}

export default User;
