import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import resume from './resume.png';

class Resume extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
   this.setState({
     dropdownOpen: !this.state.dropdownOpen
   });
 }
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
            <div className="col-md-8"/>
            <div className="col-md-4">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Download
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1ecIdovljemb5OAhK5gYYwN8uAGqaMn-d/view?usp=sharing">Download pdf <i className="fa fa-file-pdf-o" aria-hidden="true"></i></a></DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>< a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1fJtJkTjtlYD0rX5LX-KNfu7TnVlXEwuS/view?usp=sharing">Download plain text <i className="fa fa-arrow-down" aria-hidden="true"></i></a></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <div className="row">
            <div className="col-md-1"/>
            <div className="col-md-10 d-none d-md-block mx-auto embed-responsive embed-responsive-1by1">
              <iframe className="embed-responsive-item" title="resume" src="https://docs.google.com/document/d/e/2PACX-1vTvBYVT6cyErDUOHoRIutz-lWsCIEGd2_uTlQkxBulMwDVTjfKVSP0DG7uqY0M9en57G4JirEoLv_Ik/pub?embedded=true" width="100%" ></iframe>
            </div>
            <div className="d-block d-sm-none">
              <img className="img-responsive" src={resume} alt="resume"/>
            </div>
          <div className="col-md-1"/>
          </div>
        </div>
      </div>
    );
  }
}
export default Resume;
