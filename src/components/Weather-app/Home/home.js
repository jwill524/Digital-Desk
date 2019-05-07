import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from '../nav';
import './home.css'
import App from '../../../App'
import cheese from '../Important/All-important';
import EventScheduler from '../../../EventScheduler/EventScheduler'


class Home extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
          <Navigation/>
          <Route path="/" component={App} />
          <Route path="/weather" component={cheese} />
          <Route path="/calendar" component={EventScheduler}/>
          
       </BrowserRouter>
    )
  }
}


export default Home;