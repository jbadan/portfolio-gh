import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class Contact extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
          <div className="col-md-4 d-none d-md-block mx-auto">
            <Sidebar />
          </div>
          <div className="d-block d-sm-none">
            <Navbar />
          </div>
        <div className="col-md-8 App">
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-10 embed-responsive embed-responsive-1by1">
              <iframe className="embed-responsive-item" title="contact form" src="https://jenna220.typeform.com/to/VOMcC4" width="80%" >Loading...</iframe>
            </div>
            <div className="col-md-1"/>
          </div>
      </div>
    </div>
    );
  }
}
export default Contact;
