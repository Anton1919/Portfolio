import React from 'react';
import s from './Footer.module.css'
import stylesContainer from "../common/styles/Container.module.css";
import instagram from '../assets/image/instagram.png'
import telegram from '../assets/image/telegram.png'
import linkedin from '../assets/image/linkedin.png'
import vk from '../assets/image/VK.png'


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesContainer.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Anton Ponomarev</h2>
                <div className={s.footerDescr}>
                    <a href='https://instagram.com/m__moments__?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"
                       className={s.descr}>
                        <img src={instagram} alt="instagram"/>
                    </a>
                    <a href='https://t.me/anton_qqq' target='_blank' rel="noreferrer" className={s.descr}>
                        <img src={telegram} alt="telegram"/>
                    </a>
                    <a href='https://www.linkedin.com/in/anton-ponomarev-174749240/' target='_blank' rel="noreferrer"
                       className={s.descr}><img src={linkedin} alt="linkedin"/></a>
                    <a href='https://vk.com/id659555735' target='_blank' rel="noreferrer" className={s.descr}><img
                        src={vk} alt="vk"/></a>
                </div>
                <div className={s.confidentiality}>
                    <span>© 2023  All rights reserved</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;