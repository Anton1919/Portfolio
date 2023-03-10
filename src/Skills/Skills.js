import React from 'react';
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";
import html from '../assets/icon/html.svg'
import css from '../assets/icon/css3.svg'
import react from '../assets/icon/react.svg'
import js from '../assets/icon/js.svg'
import mui from '../assets/icon/material.svg'
import sass from '../assets/icon/sass.svg'
import ts from '../assets/icon/ts.svg'
import tdd from '../assets/icon/tdd.svg'
import axios from '../assets/icon/axios.svg'
import git from '../assets/icon/git.svg'
import storybook from '../assets/icon/storybook.svg'
import figma from '../assets/icon/figma.svg'
import node from '../assets/icon/node.svg'
import rest from '../assets/icon/api.svg'
import redux from '../assets/icon/redux.svg'


const Skills = () => {
    return (
        <div className={s.skillsBlock} id='skills'>
            <div className={`${styleContainer.container} ${s.skillsContainer}`}>
                <div className={s.title}>
                    <h2>Skills</h2>
                </div>
                <div className={s.skills}>
                    <Skill title={'HTML'} image={html}/>
                    <Skill title={'CSS'} image={css}/>
                    <Skill title={'SASS/SCSS'} image={sass}/>
                    <Skill title={'MUI'} image={mui}/>
                    <Skill title={'JS'} image={js}/>
                    <Skill title={'TS'} image={ts}/>
                    <Skill title={'React'} image={react}/>
                    <Skill title={'REDUX'} image={redux}/>
                    <Skill title={'REST API'} image={rest}/>
                    <Skill title={'GIT'} image={git}/>
                    <Skill title={'TDD'} image={tdd}/>
                    <Skill title={'STORYBOOK'} image={storybook}/>
                    <Skill title={'FIGMA'} image={figma}/>
                    <Skill title={'AXIOS'} image={axios}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;