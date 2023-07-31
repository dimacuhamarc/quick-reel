"use client";

import style from './hero.module.scss';
import { useState } from 'react';

const hero = () => {
    const [activeTab, setActiveTab] = useState('Top Rated Films');
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <section className="hero is-dark is-bold is-medium">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">Welcome to QuickReel!</h1>
                        <h2 className="subtitle">your go-to app for all things cinema</h2>
                    </div>
                </div>
                <div className="hero-foot">
                    <nav className="tabs is-boxed is-fullwidth">
                        <div className="container">
                            <ul>
                                <li className={activeTab === 'Top Rated Films' ? 'is-active' : ''}>
                                    <a onClick={() => handleTabClick('Top Rated Films')}>Top Rated Films</a>
                                </li>
                                <li className={activeTab === 'New Releases' ? 'is-active' : ''}>
                                    <a onClick={() => handleTabClick('New Releases')}>New Releases</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </section>
            <section className="hero is-large">
                <div className="hero-body">
                    <div className="container">
                        {activeTab === 'Top Rated Films' ? <TopRatedFilms /> : <NewReleases />}
                    </div>
                </div>
            </section>
        </div>
    )
}


const TopRatedFilms = () => {
    return <h1 className="title">Top Rated Films Content</h1>;
};
  
const NewReleases = () => {
    return <h1 className="title">New Releases Content</h1>;
};

export default hero;