import React from 'react';
import InsideAbout from './InsideAbout';
import SchoolIcon from '@mui/icons-material/School';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocationCityIcon from '@mui/icons-material/LocationCity';


const About = () => {

    let iconStyles = {
        color: '#9575de',
        transform: 'scale(1.5)'
    }

    return (
        <>
            <div className='about-page'>
            <h1>About Me</h1>
            <span className='underline-span'></span>
            <div className='para-div'>
                <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
            </div>
            <div className='inside-about'>
                <h1>Education</h1>
                <div className='education'>
                    <div className='about-card-container'>
                        <SchoolIcon style={iconStyles} />
                        <InsideAbout
                            name='Allenhouse Business School'
                            location='Kanpur, India'
                            timeline='2019 - 2022'
                            position='Bachelor in Computer Application'
                        />
                    </div>
                    <div className='about-card-container'>
                        <ApartmentIcon style={iconStyles} />
                        <InsideAbout
                            name='SR Education Centre'
                            location='Kanpur, India'
                            timeline='2018 - 2019'
                            position='Intermediate ( ISC )'
                        />
                    </div>
                    <div className='about-card-container'>
                        <LocationCityIcon style={iconStyles} />
                        <InsideAbout
                            name='City Model Inter College'
                            location='Kanpur, India'
                            timeline='2016 - 2017'
                            position='High School ( ICSE )'
                        />
                    </div>
                </div>
            </div>
            <div className='inside-about'>
                <h1>Work Experience</h1>
                <div className='experience'>
                    <div className='about-card-container'>
                        <img src={require('../images/tgplogo.jpg')} />
                        <InsideAbout
                            name='The Gathering Place'
                            location='Remote, USA'
                            timeline='06/2023 - Present'
                            position='Frontend Developer Intern'
                        />
                    </div>
                    <div className='about-card-container'>
                        <img src={require('../images/gssoclogo.jpg')} />
                        <InsideAbout
                            name='GirlsScript Summer of Code'
                            location='Remote, India'
                            timeline='05/2023 - Present'
                            position='Open Source Contributor'
                        />
                    </div>
                    <div className='about-card-container'>
                        <img src={require('../images/twowaitslogo.jpg')} />
                        <InsideAbout
                            name='Twowaits Technologies'
                            location='Remote, India'
                            timeline='11/2021 - 11/2021'
                            position='Web Development Scholar Intern'
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About
