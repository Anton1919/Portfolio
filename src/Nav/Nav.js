import React, {useState} from 'react';
import s from './Nav.module.css'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from 'react-scroll'

const Nav = () => {

    const [nav, setNav] = useState(false)

    const onChangeHandler = () => {
        setNav(!nav)
    }

    return (
        <>
            <div className={nav ? s.nav + " " + s.active : s.nav}>
                <Link onClick={onChangeHandler} to='home' smooth={true} offset={-15} duration={500}>Home</Link>
                <Link onClick={onChangeHandler} to='skills' smooth={true} offset={-15} duration={500}>Skills</Link>
                <Link onClick={onChangeHandler} to='projects' smooth={true} offset={-15} duration={500}>Projects</Link>
                <Link onClick={onChangeHandler} to='contacts' smooth={true} offset={-15} duration={500}>Contacts</Link>
            </div>

            <div onClick={onChangeHandler} className={s.mobileBtn}>
                {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
            </div>

        </>

    );
};

export default Nav;