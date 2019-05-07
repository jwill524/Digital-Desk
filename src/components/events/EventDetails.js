import React from 'react'

const EventDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className='container section event-details'>
            <div className='card z-depth-0'>
            <div className='card-content'>
                <span className='card-title'>Event Title -{id}</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sapien elit. Suspendisse mollis laoreet augue ut molestie. Nunc massa tortor, tempor a neque in, aliquet tristique urna</p>
            </div>
            <div className='card-action grey lighten-4 grey-text'>
                <div> Posted by the End User</div>
                <div> 5th May, 9pm</div>
            </div>
            </div>
            </div>

    )
}

export default EventDetails;