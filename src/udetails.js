import React, { Component } from 'react';

class Udetails extends Component {
  render() {
    return (
            <div className="col-lg-4 mt-10">
            <div className="user-card  p-3">
                <div className="image ">
                    <img src='https://via.placeholder.com/150' className="img-circle img-fluid mb-3" alt="user image"/>
                    <h5 className="mb-0">Mike Huston</h5>
                    <p >Product manager@ Flat CRM Management</p>
                </div>
                <div className="details">
                            
                <table className="table text-left">
 
                    <tbody>
                        <tr>
                        <th scope="row">Full name:</th>
                        <td>Mike Huston</td>
                        </tr>
                        <tr>
                        <th scope="row">Email:</th>
                        <td>MikeHuston@live.com</td>
                        </tr>
                        <tr>
                        <th scope="row">Phone:</th>
                        <td colSpan="2">+(069)238-458</td>
                        </tr>
                        <tr>
                        <th scope="row">Company:</th>
                        <td colSpan="2">No information provided</td>
                        </tr>
                        <tr>
                        <th scope="row">Address:</th>
                        <td colSpan="2">47, West shewrapra road, mirpur dhaka</td>
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