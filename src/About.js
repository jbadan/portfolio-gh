import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import seattle from './seattle.png';
import Navbar from './Navbar';


class About extends Component {
  render() {
    return (
      <div className="row fixedHeight text-center">
          <div className="col-md-4 d-none d-md-block mx-auto">
            <Sidebar />
          </div>
          <div className="d-block d-sm-none">
            <Navbar />
          </div>
          <div className='col-md-8 col-xs-12 App'>
            <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <h1 className="title spacing"> Hi, I{`'`}m Jenna. </h1>
              <p className="text-left paddingText"> I{`'`}m a web developer with a social sciences background. My training in psychology provides me with the analytical skills, grasp of statistics,
              effective communication and an understanding of group dynamics that make me an asset to any team. These complement my technical skillset allow for novel,
              people-centered perspectives on tough problems.</p>
            </div>
            <div className="col-sm-1"></div>
          </div>
          <div className="row">
            <img alt="Seattle skyline" className="mx-auto d-block seattle img-fluid" src={seattle}/>
          </div>
          <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
            <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Languages</th>
                  <th>Frameworks & Libraries</th>
                  <th>Databases</th>
                  <th>Other</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">HTML5/CSS3/ JavaScript, SQL</th>
                  <td>Bootstrap, Phaser.io, Express, Node, JQuery, React, Material UI, Chart.js</td>
                  <td>PostgreSQL, Sequelize, MongoDB</td>
                  <td>AJAX, RESTful web services, Git, VBA, Sharepoint, IBM Cognos BI, PeopleSoft, UltiPro</td>
                </tr>
              </tbody>
              </table>
              </div>

            </div>
            <div className="col-sm-1"></div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
