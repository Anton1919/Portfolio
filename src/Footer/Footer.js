import React from 'react';
import s from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container} ${s.footerContainer}`}>
               <h2 className={s.title}>Anton</h2>
                <div className={s.footerDescr}>
                    <div className={s.descr}>Inst</div>
                    <div className={s.descr}>VK</div>
                    <div className={s.descr}>LinkedIn</div>
                    <div className={s.descr}>Twitter</div>
                </div>
                <div className={s.confidentiality}>
                    <span>All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;