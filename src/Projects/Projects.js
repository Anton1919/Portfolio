import React from 'react';
import s from "./Projects.module.css"
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <h2 >Projects</h2>
                </div>
                <div className={s.cardProject}>
                    <Project projectName={'Todo list'} description={'Application build with ReactJS/Redux/TypeScript.'}/>
                    <Project projectName={'Social Network'} description={'SPA created with React JS library, Redux for state management, TypeScript'}/>
                    <Project projectName={'Counter'} description={'Counter application with ReactJS/Redux/TypeScript.'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;