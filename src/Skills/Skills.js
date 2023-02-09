import React from 'react';
import s from './Skills.module.css'
import stylesContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.skillsContainer}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'HTML&CSS'} description={'description'}/>
                    <Skill title={'JS'} description={'description'}/>
                    <Skill title={'React'} description={'description'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;