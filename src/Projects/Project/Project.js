import React from 'react';
import s from "./Project.module.css"

const Project = () => {
    return (
        <div className={s.wrapper}>
           <div className={s.view}>
               <button className={s.btn}>View</button>
           </div>
            <div className={s.descriptionBlock}>
                <div className={s.title}>
                    <span>Project name</span>
                </div>
                <div className={s.description}>
                    <span>description</span>
                </div>
            </div>
        </div>
    );
};

export default Project;