import React from 'react';
import s from "./Projects.module.css"
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import todo from '../assets/image/todo.jpg'
import counter from '../assets/image/counter.jpg'
import balloons from '../assets/image/balloons.png'
import bank from '../assets/image/bank.png'
import game from '../assets/image/game.png'
import social from '../assets/image/social.jpg'

const Projects = () => {
    return (
        <div className={s.projectsBlock} id='projects'>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <h2>Projects</h2>
                </div>
                <div className={s.cardProject}>
                    <Project
                        backgroundImage={todo}
                        projectName={'Todo list'}
                        description={'Application build with ReactJS/Redux/TypeScript.'}/>
                    <Project reference={'https://anton1919.github.io/samurai-way/'}
                             backgroundImage={social}
                             projectName={'Social Network'}
                             description={'SPA created with React JS library, Redux for state management, TypeScript'}/>
                    <Project reference={'https://anton1919.github.io/counter-redux/'}
                             backgroundImage={counter}
                             projectName={'Counter'}
                             description={'Counter application with ReactJS/Redux/TypeScript.'}/>
                    <Project reference={'https://anton1919.github.io/ballons/'}
                             backgroundImage={balloons}
                             projectName={'Balloon site'}
                             description={'Vanila JS + HTML&SASS. Balloon tours. An unforgettable adventure awaits you'}/>
                    <Project reference={'https://anton1919.github.io/Bank/Bank'}
                             backgroundImage={bank}
                             projectName={'Bank site'}
                             description={'Vanila JS + HTML&CSS. When the bank is at its maximum understandable'}/>
                    <Project reference={'https://anton1919.github.io/storeGame/'}
                             backgroundImage={game}
                             projectName={'Game club site'}
                             description={'Vanila JS + HTML&CSS, GRID. Immerse yourself in the world of modern games'}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;