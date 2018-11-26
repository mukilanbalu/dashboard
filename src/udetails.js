import React, { Component } from 'react';

class Udetails extends Component {
    constructor(props){
        super(props);
        console.log( 'hi'+this.props.name);
        this.click = this.click.bind(this);
    }
    click(){
        console.log(this.props.user.name)
    }
  render() {
    return (
            <div className="col-lg-4 mt-10">
            <div className="user-card  p-3">
                <div className="image ">
                    <img src={this.props.user.image} className="img-circle img-fluid mb-3" alt="user image"/>
                    <h5 className="mb-0">{this.props.user.name}</h5>
                    <p >Product manager@ Flat CRM Management</p>
                </div>
                <div className="details" onClick={this.click}>
                            
                <table className="table text-left">
 
                    <tbody>
                        <tr>
                        <th scope="row">Full name:</th>
                        <td>{this.props.user.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Email:</th>
                        <td>{this.props.user.email}</td>
                        </tr>
                        <tr>
                        <th scope="row">Phone:</th>
                        <td colSpan="2">{this.props.user.number}</td>
                        </tr>
                        <tr>
                        <th scope="row">Company:</th>
                        <td colSpan="2">{this.props.user.Company}</td>
                        </tr>
                        <tr>
                        <th scope="row">Address:</th>
                        <td colSpan="2">{this.props.user.address}</td>
                        </tr>
                    </tbody>
                    </table>
                
                </div>

            
            
            </div>
                <div className="tax-card my-4 d-flex p-3">
                    <div className="tax-icon">
                     <i className="fa fa-balance-scale" aria-hidden="true"></i>
                     </div>
                     <div className="tax-text">
                    <h6 className=" mb-0">Tax Evassion & Pay out Notice</h6> 
                    <p className="sub-text mb-0">Date 7 Mar 2017 1000  </p>
                    </div>
                    <div className="more-icon">
                    <i className="" >...</i>
                    </div>


                </div>

            </div>
      
    );
  }
}
export default Udetails;