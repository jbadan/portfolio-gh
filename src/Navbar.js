import React, { Component } from 'react';
import './App.css';
import{
  BrowserRouter as Router,
  Link
}from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span><i className="fa fa-bars" aria-hidden="true"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to = "/" className="nav-link">Home </Link>
            </li>
            <li className="nav-item">
              <Link to = "/about" className="nav-link">About </Link>
            </li>
            <li className="nav-item">
              <Link to = "/work" className="nav-link">Projects </Link>
            </li>
            <li className="nav-item">
              <Link to = "/resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to = "/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;
