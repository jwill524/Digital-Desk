import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="peach">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/weather"><div className="thermometer"></div></NavLink>

        </div>
    )
}

export default Navigation