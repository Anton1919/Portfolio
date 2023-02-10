import React from 'react';
import s from './Skill.module.css'

const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <img src={props.image} alt="image"/>
            </div>
            <h3>{props.title}</h3>
        </div>
    );
};

export default Skill;