import React from 'react'

const ProjectCard = ({imgSrc, name, projectDesc, githubUrl, liveUrl}) => {
    return (
        <div className='project-card'>
            <img src={imgSrc} />
            <h3>{name}</h3>
            <p>{projectDesc}</p>
            <a href={githubUrl} target="_blank">GitHub</a>
            <a href={liveUrl} target="_blank">Live</a>
        </div>
    )
}

export default ProjectCard
