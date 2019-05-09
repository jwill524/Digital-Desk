import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "../nav";
import "./home.css";
import App from "../../../App";
import cheese from "../Important/All-important";
import EventScheduler from "../../../EventScheduler/EventScheduler";
import Base from "../../Firebase";



class Home extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Navigation />
          <Route path='/' component={App} />
          <Route path='/weather' component={cheese} />
          <Route path='/calendar' component={EventScheduler} />
          <Route path='/rating' component={Base}/>
        </BrowserRouter>
    );
  }
}

export default Home;
