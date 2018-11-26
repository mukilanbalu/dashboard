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
                ],
                error:{
                    name:false,
                    email:false,
                    number:false,
                    Company:false,
                    address:false,
                    image:false,
                    
                    
                }
        
        }
        this.addContact = this.addContact.bind(this);
        this.editContact = this.editContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
        this.saveContact=this.saveContact.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleEmail=this.handleEmail.bind(this);
        this.handleNumber=this.handleNumber.bind(this);
        this.handleCompany=this.handleCompany.bind(this);
        this.handleAddress=this.handleAddress.bind(this);
        this.handleClick=this.handleClick.bind(this);
        this.upload=this.upload.bind(this);
        
      }


      
      addContact(e){

          e.preventDefault();
       if (this.state.valid === true){
           this.setState({valid:true});
          user = Object.assign({}, this.state.contact);    //creating copy of object
            var arr = this.state.contact;
           
          user = {
                name:this.state.name,
                email:this.state.email,
                number:this.state.number,
                Company:this.state.Company,
                address:this.state.address,
                image:this.state.image    
          }
       
       
        
          arr.push(user);        
        //   this.setState({user});                       //updating value
        this.setState({
            contact: arr
          });
        this.setState({name:''});
        this.setState({email:''});
        this.setState({number:''});
        this.setState({Company:''});
        this.setState({address:''});
        this.setState({image:''});
      }
    
    }

    editContact(index){
        this.setState({name : this.state.contact[index].name });
        this.setState({email: this.state.contact[index].email});
        this.setState({number: this.state.contact[index].number});
        this.setState({Company: this.state.contact[index].Company});
        this.setState({address: this.state.contact[index].address});
        this.setState({image:this.state.contact[index].image});
        // console.log(this.state.contact[index].name);
        // console.log(this.state.name);
        indx=index;
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
        // e.target.user.value(this.state.name);
        user = {
            name:this.state.name,
                email:this.state.email,
                number:this.state.number,
                Company:this.state.Company,
                address:this.state.address,
                image:this.state.image    
      }
    //   console.log(user);
       arr[indx] = user;       
     this.setState({ m : user });
    //  console.log(this.state.contact);
    this.setState({name:''});
    this.setState({email:''});
    this.setState({number:''});
    this.setState({Company:''});
    this.setState({address:''});
    this.setState({image:''});
    }

    handleName(event) {
        event.preventDefault();
        var error = {...this.state.error}

        if(event.target.value != "")
        {  
             this.setState({name  : event.target.value});
             error.name = true;
            this.setState({error})
        }
        else{
            alert('enter user name');
        }
        
        
      }
      handleEmail(event) {
        event.preventDefault();
        var error = {...this.state.error}
        if(event.target.value != "")
        {  
            this.setState({email  : event.target.value});
             error.email = true;
            this.setState({error})
        }
       
      }
      handleNumber(event) {
        event.preventDefault();
        var error = {...this.state.error}
        if(event.target.value != "")
        {  
            this.setState({number  : event.target.value});
            error.number = true;
            this.setState({error})
        }
        
      }
      handleCompany(event) {
        event.preventDefault();
        var error = {...this.state.error}
        if(event.target.value != "")
        {  
            this.setState({Company  : event.target.value});
            error.Company = true;
            this.setState({error})
        }
        
      
      }
      handleAddress(event){
          event.preventDefault();
          var error = {...this.state.error}
          if(event.target.value != "")
          {  
            this.setState({address : event.target.value});
              error.address = true;
              this.setState({error});
              console.log(this.state.error)
          }
          
        
      }
      handleClick(index){
          this.setState({ clicked : !this.state.clicked});
          this.setState({index : index});

          console.log(index);      }
    upload(e){
        let files=e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        var error = {...this.state.error}
        reader.onload=(e)=>{
            // console.log(e.target.result);
            this.setState({image: e.target.result})
            error.image = true;
              this.setState({error});
        }
        var err = this.state.error;
          
        var isAllTrue = Object.keys(err).every( function (key) {
          return err[key]===true;
        
      });
      this.setState({valid:true});
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
                                         <button type="button" className="btn btn-md px-3 py-2  add-btn" data-toggle="modal" data-target="#myModal" > <i className="fa fa-plus mr-1" aria-hidden="true"></i> Add Contact </button> 
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
                            <i className="far fa-edit btn  p-0 mx-1"  onClick={() => this.editContact(index)} data-toggle="modal" data-target="#upModal"  aria-hidden="true"></i>
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

                    <Add user={this.state}/>
               
                
                
                <div className="modal fade" id="upModal">
                    <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                    
                    
                        <div className="modal-header">
                        <h4 className="modal-title">edit Contact</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                    
                        <div className="modal-body">
                        <form onSubmit={this.saveContact} className="p-2" >
                            <input type="text" name="user" value={this.state.name}   onChange={this.handleName} placeholder="Full name" className="form-control" id="usr"/>

                            <input type="email" name="email" value={this.state.email}   onChange={this.handleEmail} placeholder="Email id" className="form-control" id="email"/>

                            <input type="number" name="numb" value={this.state.number}   onChange={this.handleNumber} placeholder="tel number" className="form-control" id="numb"/>

                            <input type="text" name="cname" value={this.state.Company}   onChange={this.handleCompany} placeholder="Company name" className="form-control" id="cname"/>

                            <input type="text" name="address" value={this.state.address}   onChange={this.handleAddress} placeholder="address" className="form-control" id="address"/>

                            <input type="file" name="user" accept="image/gif,image/jpeg" className="add-btn" name="fileupload" onChange={(e)=>this.upload(e)} id="fileupload"/>

                            <div className="modal-footer">
                            <button type="button submit" value="Submit"  className="btn btn-secondary">Update</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                         </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Udetails user={this.state.contact[this.state.index]} />
                

             </div>
   
     
    );
  }
}

export default User;
