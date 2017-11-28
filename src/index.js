import React, { Component } from 'react';
import { render } from "react-dom";
import './index.css';
import Home from "./Home";
import About from "./About";
import Work from  "./Work";
import Contact from "./Contact";
import NotFound from "./NotFound";
import Resume from "./Resume";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import anime from "animejs";
import "./fade.css";

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link
}from 'react-router-dom';

const PageFade = props => (
  <CSSTransition
    {...props}
    classNames="fadeTranslate"
    timeout={1000}
    mountOnEnter={true}
    unmountOnExit={true}
  />
);

const App = props => {

  const locationKey = props.location.pathname;

    return (
      <TransitionGroup>
       <PageFade key={locationKey}>
         <section className="fix-container">
          <Switch location ={props.location}>
           <Route exact path="/portfolio_gh" component={Home} />
           <Route path="/portfolio_gh/about" component={About} />
           <Route path="/portfolio_gh/work" component={Work} />
           <Route path="/portfolio_gh/contact" component={Contact} />
           <Route path="/portfolio_gh/resume" component={Resume} />
           <Route path="/portfolio_gh/*" component={NotFound} />
         </Switch>
        </section>
       </PageFade>
     </TransitionGroup>
    );
}
const BasicExample = () => (
  <Router>
    <Route path="/" component={App} />
  </Router>
);


render(<BasicExample />, document.getElementById("root"));
