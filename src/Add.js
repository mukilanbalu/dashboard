import React, { Component } from 'react';

class Add extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        
        this.state={
                name:'',
                email:'',
                number:'',
                Company:'',
                address:'',
                image:'',
                submit: "add",
                valid:false,
                error:{
                    name:false,
                    email:false,
                    number:false,
                    Company:false,
                    address:false,
                    image:false,
                }
    }
    
    


    this.addContact=this.addContact.bind(this);
    this.saveContact=this.saveContact.bind(this);
    this.upload=this.upload.bind(this);
    this.handleChange=this.handleChange.bind(this);
}
componentWillReceiveProps(props){
    // console.log(props)
    // console.log("will rec "+props.submit);
    // console.log(this.state.submit);
    if (props.submit == ""){
    this.setState({
                
                name:this.props.user.name,
                email:this.props.user.email,
                number:this.props.user.number,
                Company:this.props.user.Company,
                address:this.props.user.address,
                image:this.props.user.image,
                submit: props.submit
            });
            // console.log(this.state.submit);
            
        }
        else{
            this.setState({
                
                name:"",
                email:"",
                number:"",
                Company:"",
                address:"",
                image:"",
                submit:props.submit
            });
            // console.log(this.state.submit);

        }
    
}

 handleChange(e) {
        e.preventDefault();

        this.setState({[e.target.name]: e.target.value});
                
          this.setState({
              error:Object.assign({}, this.state.error, {[e.target.name]: e.target.value === "" ? false :true})
          });
            
        
        }       
       



addContact(e){
    e.preventDefault();
    var user = {
        name:this.state.name,
        email:this.state.email,
        number:this.state.number,
        Company:this.state.Company,
        address:this.state.address,
        image:this.state.image    
  }
  this.props.addContact(user);
  this.setState({name:''});
  this.setState({email:''});
  this.setState({number:''});
  this.setState({Company:''});
  this.setState({address:''});
  this.setState({image:''});
}
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


saveContact(e){
    e.preventDefault();
    var user = {
        name:this.state.name,
        email:this.state.email,
        number:this.state.number,
        Company:this.state.Company,
        address:this.state.address,
        image:this.state.image    
  }
  this.props.saveContact(user);
  this.setState({name:''});
  this.setState({email:''});
  this.setState({number:''});
  this.setState({Company:''});
  this.setState({address:''});
  this.setState({image:''});
}
  
    render() {
        return ( 
            <div>
 <div className="modal fade" id="myModal">
 <div className="modal-dialog modal-dialog-centered">
 <div className="modal-content">
 
 
     <div className="modal-header">
     <h4 className="modal-title">Add/edit Contact</h4>
     <button type="button" className="close" data-dismiss="modal">&times;</button>
     </div>
     
 
     <div className="modal-body">
     <form  className="p-2" >
         <input type="text"   name="name" value={this.state.name}   onChange={this.handleChange} placeholder="Full name" className="form-control" id="usr"/>
         <p className={(this.state.error.name) ? 'd-none' : 'text-danger'}>please enter value</p>


         <input type="email"  name="email" value={this.state.email}   onChange={this.handleChange} placeholder="Email id" className="form-control" id="email"/>
         <p className={(this.state.error.email) ? 'd-none' : ' text-danger'}>please enter value</p>

         <input type="number"   name="number" value={this.state.number}   onChange={this.handleChange} placeholder="tel number" className="form-control" id="numb"/>
         <p className={(this.state.error.number) ? 'd-none' : 'text-danger'}>please enter value</p>

         <input type="text"   name="Company" value={this.state.Company}   onChange={this.handleChange} placeholder="Company name" className="form-control" id="cname"/>
         <p className={(this.state.error.Company) ? 'd-none' : ' text-danger'}>please enter value</p>

         <input type="text"   name="address" value={this.state.address}   onChange={this.handleChange}  placeholder="address" className="form-control" id="address"/>
         <p className={(this.state.error.address) ? 'd-none' : ' text-danger'}>please enter value</p>

         
         <input type="file" name="image" className="add-btn" name="fileupload" id="fileupload" onChange={(e)=>this.upload(e)} />
         <p className={(this.state.error.image) ? 'd-none' : ' text-danger'}>please select an image</p>
        
         <div className="modal-footer">
         
         <button type="button submit" value="Submit" className={(this.state.valid) ? ' btn btn-secondary ' : ' btn btn-secondary disabled'} 
         onClick={(this.state.submit) === "add" ? (e)=>{this.addContact(e)} :(e)=>{this.saveContact(e)} }>{(this.state.submit) === "add" ? "add" : "update" }</button>
        
         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
     </div>
        
      </form>
     </div>
     

 </div>
 </div>
</div>
</div>

        )
    }
}
export default Add;
        