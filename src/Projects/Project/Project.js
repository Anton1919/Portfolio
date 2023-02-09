import React from 'react';
import s from "./Project.module.css"

const Project = (props) => {
    return (
        <div className={s.wrapper}>
           <div className={s.view}>
               <a className={s.btn}>View</a>
           </div>
            <div className={s.descriptionBlock}>
                <div className={s.title}>
                    <h2>{props.projectName}</h2>
                </div>
                <div className={s.description}>
                    <span>{props.description}</span>
                </div>
            </div>
        </div>
    );
};

export default Project;