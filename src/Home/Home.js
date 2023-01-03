import React from 'react';
import s from './Home.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Home = () => {
    return (
        <div className={s.home}>
            <div className={styleContainer.container}>
                <div className={s.greeting}>
                    <span>Hi there</span>
                    <h1>I am Anton</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={s.photo}>Photo</div>
            </div>
        </div>
    );
};

export default Home;