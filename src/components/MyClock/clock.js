import React from 'react';
import Clock from 'react-live-clock';
import './clock.css';
import { NavLink } from 'react-router-dom';


class MyComponent extends React.Component {
    render() {
        return (
            <NavLink to='/'>
            <div className="clock23">
                <Clock
                    format={'HH:mm:ss'}
                    ticking={true}
                    timezone={'US/Atlantic'} />
            </div>
            </NavLink>
            

        )

    }
}

export default MyComponent