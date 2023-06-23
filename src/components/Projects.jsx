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
                    projectDesc='Implemented a multi-theme and multi-mode typing test website.'
                    githubUrl='https://github.com/theanushka-v18/Typing-Test'
                    liveUrl='https://typing-test-theanushka-v18.vercel.app/'
                />
                <ProjectCard 
                    imgSrc={require('../images/typingtestpic.png')}
                    name='Typing Test'
                    projectDesc='Implemented a multi-theme and multi-mode typing test website.'
                    githubUrl='https://github.com/theanushka-v18/Typing-Test'
                    liveUrl='https://typing-test-theanushka-v18.vercel.app/'
                />
            </div>
        </div>
    )
}

export default Projects
