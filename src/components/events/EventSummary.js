import React from 'react'

const EventSummary = () => {
    return (
        <div className='card z-depth-0 event-summary'>
            <div className= 'card-content grey-text text-darken-3'>
                <span className='card-title'> Event Title</span>
                <p> Posted by the End user</p>
                <p className='grey-text'>5th May, 9pm</p>
            </div>
        </div>
    )
}

export default EventSummary