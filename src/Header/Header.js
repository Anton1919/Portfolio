import React, {useState} from 'react';
import s from './Header.module.css'
import Nav from "../Nav/Nav";

const Header = () => {

    const [state, setState] = useState(false)

    const changeValueScroll = () => {
        const scrollValue = document.documentElement.scrollTop

        if (scrollValue > 0) {
            setState(true)
        } else {
            setState(false)
        }
    }

    window.addEventListener('scroll', changeValueScroll)

    return (
        <div className={s.loaded}>
           <div className={state ? s.inner + " " + s.scroll : s.inner}>
               <div className={s.logo}>DEV</div>
               <Nav/>
           </div>
        </div>
    );
};

export default Header;