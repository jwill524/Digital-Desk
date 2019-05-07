import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className='right'>
      <li>
        <NavLink to='/create'>New Event</NavLink>
      </li>
      <li>
        <NavLink to='/'>Log Out</NavLink>
      </li>
      <li>
        <NavLink to='/' className='btn btn-large-waves-light blue lighten-2'>
          JD
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
