import React from 'react';
import s from './Contacts.module.css'
import stylesContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${stylesContainer.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea className={s.textarea}></textarea>
                </form>

                <button className={s.btn}>Send</button>
            </div>

        </div>
    );
};

export default Contacts;