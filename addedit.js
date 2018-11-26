import React, { Component } from 'react';

class Add extends Component {
    render() {
        return ( 
 <div className="modal fade" id="myModal">
 <div className="modal-dialog modal-dialog-centered">
 <div className="modal-content">
 
 
     <div className="modal-header">
     <h4 className="modal-title">Add Contact</h4>
     <button type="button" className="close" data-dismiss="modal">&times;</button>
     </div>
     
 
     <div className="modal-body">
     <form onSubmit={this.addContact} className="p-2" >
         <input type="text"   name="user" value={this.state.name}   onChange={this.handleName} placeholder="Full name" className="form-control" id="usr"/>
         <p className={(this.state.error.name) ? 'd-none' : 'text-danger'}>please enter value</p>


         <input type="email"  name="email" value={this.state.email}   onChange={this.handleEmail} placeholder="Email id" className="form-control" id="email"/>
         <p className={(this.state.error.email) ? 'd-none' : ' text-danger'}>please enter value</p>

         <input type="number"   name="numb" value={this.state.number}   onChange={this.handleNumber} placeholder="tel number" className="form-control" id="numb"/>
         <p className={(this.state.error.number) ? 'd-none' : 'text-danger'}>please enter value</p>

         <input type="text"   name="cname" value={this.state.Company}   onChange={this.handleCompany} placeholder="Company name" className="form-control" id="cname"/>
         <p className={(this.state.error.Company) ? 'd-none' : ' text-danger'}>please enter value</p>

         <input type="text"   name="address" value={this.state.address}   onChange={this.handleAddress} accept="image/gif,image/jpeg" placeholder="address" className="form-control" id="address"/>
         <p className={(this.state.error.address) ? 'd-none' : ' text-danger'}>please enter value</p>

         
         <input type="file" name="user" className="add-btn" name="fileupload" id="fileupload" onChange={(e)=>this.upload(e)} />
         <p className={(this.state.error.image) ? 'd-none' : ' text-danger'}>please select an image</p>
        
         <div className="modal-footer">
         
         <button type="button submit" value="Submit" className={(this.state.valid) ? ' btn btn-secondary ' : ' btn btn-secondary disabled'} >Add</button>

         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
     </div>
        
      </form>
     </div>
     

 </div>
 </div>
</div>

        )
    }
}
export default Add;
        