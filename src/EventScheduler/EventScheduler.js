import React from "react";
import App from "../App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import EventDetails from "../components/events/EventDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateEvent from "../components/events/CreateEvent";
import Navbar from "../components/layout/Navbar";

class EventScheduler extends React.Component {
  render() {
    return (
      <div className='pies'>
        <BrowserRouter>
          <Route exact path='/' component={Dashboard} />
          <Navbar />
          <switch>
            <Route path='/event/:id' component={EventDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateEvent} />
          </switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default EventScheduler;
