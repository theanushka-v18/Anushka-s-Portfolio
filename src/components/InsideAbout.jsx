import React from 'react'

const InsideAbout = ({heading, name, position, timeline, location}) => {
    return (
        <div className='about-card'>
            <h3>{position}</h3>
            <h5>{name}</h5>
            <p>{timeline}</p>
            <p>{location}</p>
        </div>
    )
}

export default InsideAbout
