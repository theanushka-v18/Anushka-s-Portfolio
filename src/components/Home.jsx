import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import About from  './About';
import Projects from './Projects';
import Skills from './Skills';
import Certificates from './Certificates';

const Home = () => {
    return (
        <>
            <div className='home-page'>
                <div className='intro'>
                    <h1 className='hi'>Hello World! I'm,</h1>
                    <h1 className='my-name'>Anushka Verma</h1>
                    <p>A Frontend Developer who is always eager to learn more and more about Frontend Web Development</p>
                    <div className='home-icons'>
                        <a href='https://www.linkedin.com/in/theanushka-v18/'><LinkedInIcon className='contact-icons' /></a>
                        <a href='https://www.instagram.com/theanushka_v18/'><GitHubIcon className='contact-icons' /></a>
                        <a href='https://twitter.com/theanushka_v18'><TwitterIcon className='contact-icons' /></a>
                        <a href='https://github.com/theanushka-v18'><InstagramIcon className='contact-icons' /></a>
                    </div>
                </div>
                <div>
                    <div className='my-photo'>
                        <img src={require('../images/anushkaphoto.jpg')} />
                    </div>
                </div>
            </div>
            <About />
            <Projects />
            <Skills />
            <Certificates />
        </>
    )
}

export default Home
