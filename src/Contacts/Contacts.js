import React from 'react';
import s from './Contacts.module.css'
import stylesContainer from "../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${stylesContainer.container} ${s.contactsContainer}`}>

                <div className={s.contacts}>
                    <div className={s.title}>
                        <h2>Contact with me</h2>
                    </div>

                    <div className={s.contactForm}>
                        <div className={s.form}>
                            <form>
                                <div className={s.formGroup}><label htmlFor="">name</label> <input type="text"/></div>
                                <div className={s.formGroup}><label htmlFor="">email</label> <input type="text"/></div>
                                <div className={s.formGroup}><label htmlFor="">message</label> <textarea className={s.textarea}></textarea></div>


                            </form>
                        </div>
                        <div className={s.formGroup}> <button className={s.btn}>Send</button></div>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default Contacts;