import React, {useState} from 'react';
import s from './Nav.module.css'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";

const Nav = () => {

    const [nav, setNav] = useState(false)

    const onChangeHandler = () => {
        setNav(!nav)
    }

    return (
       <>
           <div className={nav ? s.nav + " " + s.active : s.nav}>
               <a href="">Home</a>
               <a href="">Skills</a>
               <a href="">Projects</a>
               <a href="">Contacts</a>
           </div>

           <div onClick={onChangeHandler} className={s.mobileBtn}>
               {nav ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={35}/>}
           </div>

       </>

    );
};

export default Nav;