import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div className='projects-page'>
            <h1>Projects</h1>
            <span className='underline-span'></span>
            <div className='para-div'>
                <p>Here you will find some of my personal projects which I have made while learning Frontend Web Development</p>
            </div>
            <div className='project-section'>
                <ProjectCard 
                    imgSrc={require('../images/typingtestpic.png')}
                    name='Typing Test'
                    projectDesc='Implemented a multi-theme and multi-mode typing test website.'
                    githubUrl='https://github.com/theanushka-v18/Typing-Test'
                    liveUrl='https://typing-test-theanushka-v18.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/githubuserfinderpic.png')}
                    name='GitHub User Finder'
                    projectDesc='A website which fetches github users data by using github user API'
                    githubUrl='https://github.com/theanushka-v18/Github-User-Finder'
                    liveUrl='https://github-user-finder-theanushka-v18.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/anushkasportfolio.png')}
                    name='Anushka-s Portfolio'
                    projectDesc='My own multi-theme portfolio website made by using ReactJS and Material UI'
                    githubUrl='https://github.com/theanushka-v18/Anushka-s-Portfolio'
                    liveUrl='https://anushka-s-portfolio.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/nasaapodpic.png')}
                    name='NASA Apod'
                    projectDesc='A website which fetches the picture of the day and its info from NASA API'
                    githubUrl='https://github.com/theanushka-v18/F3-ModuleTest'
                    liveUrl='https://apodofnasa.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/userrecordspic.png')}
                    name='User Records'
                    projectDesc='User can perform CRUD operations and also used localStorage to store records'
                    githubUrl='https://github.com/theanushka-v18/User-Records'
                    liveUrl='https://user-records.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/todopic.png')}
                    name='Todo App'
                    projectDesc='User can add their todo lists and also can delete any particular todo item'
                    githubUrl='https://github.com/theanushka-v18/To-do-App'
                    liveUrl='https://todoapp-anushka.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/rockpaperscissorpic.png')}
                    name='Rock Paper Scissor'
                    projectDesc='Rock, Paper, Scissor game can be play with computer'
                    githubUrl='https://github.com/theanushka-v18/Rock-Paper-Scissor-Game'
                    liveUrl='https://rock-paper-scissor-game-anushka.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/cointosspic.png')}
                    name='Coin Toss Game'
                    projectDesc='My own multi-theme portfolio website made by using ReactJS and Material UI'
                    githubUrl='https://github.com/theanushka-v18/Coin-Toss-App'
                    liveUrl='https://coin-toss-app.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/crudpic.png')}
                    name='Set Employee Details'
                    projectDesc='Add new employee details and can delete later on'
                    githubUrl='https://github.com/theanushka-v18/Frontend2-Contest2'
                    liveUrl='https://frontend2-contest2.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/showhidetogglepic.png')}
                    name='Show, Hide and Toggle'
                    projectDesc='While learning ReactJS, I have implement a functionality to show, hide or toggle'
                    githubUrl='https://github.com/theanushka-v18/Show-Hide-Toggle'
                    liveUrl='https://show-hide-toggle.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/counterapppic.png')}
                    name='Counter App'
                    projectDesc='Increment, Decrement and Reset functionality by using ReactJS'
                    githubUrl='https://github.com/theanushka-v18/Counter-App-ReactJS'
                    liveUrl='https://counter-app-react-js.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/usabilityhubclonepic.png')}
                    name='Usability Hub Clone'
                    projectDesc='Usablility hub clone website made by using only HTML and CSS'
                    githubUrl='https://github.com/theanushka-v18/Usability-Hub-Clone'
                    liveUrl='https://usability-hub-clone.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/sampletravelwebsitepic.png')}
                    name='Sample Travel Website'
                    projectDesc='A Sample Travel website made by using only HTML and CSS'
                    githubUrl='https://github.com/theanushka-v18/Sample-Travel-Website'
                    liveUrl='https://sample-travel-website.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/digitalclockpic.png')}
                    name='Digital Clock'
                    projectDesc='Digital clock website made by using only HTML, CSS and JavaScript'
                    githubUrl='https://github.com/theanushka-v18/Digital-Clock'
                    liveUrl='https://digital-clock-wine.vercel.app/'
                />
            </div>
        </div>
    )
}

export default Projects
