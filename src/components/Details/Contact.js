import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Contact extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <h2 style={{color:'red'}}>contact</h2>
        <div className='row'>
          <div className='col-4'>
            <h4>John vincent</h4>
            <p>Nagercoil</p>
            <p>Tamil Nadu</p>
            <p>+91 7598105635</p>
            <p>johnvincentcse@gmail.com</p>
          </div>
          <div className='col'>
          
          </div>
        </div>
      </div>
    )
  }
}
export default Contact;