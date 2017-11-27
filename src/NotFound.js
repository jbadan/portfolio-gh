import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

class NotFound extends Component {
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
          <h1> Whoops! That{`'`}s not a page.</h1>
          <iframe title="404gif" src="https://giphy.com/embed/13ywPzPJdfhmBG" width="300" height="200" frameBorder="0"></iframe>
          <a href="/">Back to home </a>
        </div>
      </div>
    );
  }
}
export default NotFound;
