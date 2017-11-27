import React, { Component } from 'react';
import './App.css';
import './Home.css';
import jenna from './jenna.png';
import Sticky from 'react-stickynode';
import{
  BrowserRouter as Router,
  Link
}from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
        <div>
          <div className="topPlaceholder"/>
          <Sticky enabled={true}>
            <div>
              <div className="row minHeightRow">
                <div className="col-md-12">
                  <Link to="/"><img className="logoImage" alt="jenna" src={jenna} /></Link>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <h1 className="white"> Jenna Badanowski</h1>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <h2 className="white">Web Developer</h2>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <Link to="/about">
                      <button type="button">About</button>
                  </Link>
                  <Link to="/work">
                      <button type="button">Projects</button>
                  </Link>
                  <Link to="/resume">
                      <button type="button">Resume</button>
                  </Link>
                  <Link to="/contact">
                      <button type="button">Contact</button>
                  </Link>

                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-12">
                  <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/jenna-badanowski-6b672261/"><i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1ecIdovljemb5OAhK5gYYwN8uAGqaMn-d/view?usp=sharing"><i className="fa fa-file-o fa-2x" aria-hidden="true"></i></a>
                  <a rel="noopener noreferrer" target="_blank" href="https://github.com/jbadan"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
                </div>
              </div>
            </div>

          </Sticky>

        </div>

    );
  }
}
export default Sidebar;
