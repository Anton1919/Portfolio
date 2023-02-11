import React from 'react';
import s from './Home.module.css'
import photo from '../assets/image/photo_2023-02-07_17-23-57.jpg'


const Home = () => {

    return (
        <div className={s.home} id='home'>
            <div className={s.container}>
                <div className={s.info}>
                    <div className={s.descr}>

                        <div className={s.greeting}>
                            <span>Hi there</span>
                        </div>

                        <div className={s.title}>
                            <h1><span className={s.iam}>I am </span>Anton</h1>
                        </div>


                        <div className={s.greeting}>
                            <span>Frontend developer</span>
                        </div>

                    </div>
                    <div className={s.image}>
                        <img src={photo} alt="image"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;