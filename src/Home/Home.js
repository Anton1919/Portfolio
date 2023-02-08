import React from 'react';
import s from './Home.module.css'


const Home = () => {

    return (
        <div className={s.home}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.jobWrap}><span className={s.job}>Hi there</span></div>
                    <div className={s.title}>
                        <h1><span className={s.greeting}>I am</span> Anton</h1>
                    </div>
                    <div className={s.jobWrap}><span className={s.job}>Frontend developer</span></div>
                </div>
            </div>
            <div className={s.background}>
                <div className={s.photo}>Photo</div>
            </div>

        </div>
    );
};

export default Home;