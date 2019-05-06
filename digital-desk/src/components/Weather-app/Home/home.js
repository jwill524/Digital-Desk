import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from '../nav';
import './home.css'
import App from '../../../App'
import cheese from '../Important/All-important';

class Home extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
      <Navigation/>
      <Route path="/" component={App} />
      <Route path="/weather" component={cheese} />
      </BrowserRouter>
    )
  }
}


export default Home;