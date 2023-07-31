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
            <section className="hero is-dark is-bold is-large">
                <div className="hero-body ">
                    <div className="container ">
                        <h1 className="has-text-weight-bold is-size-1">Welcome to QuickReel! 📽</h1>
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
    return (
        <div>
            <div className="card">
                <div className="card-content">
                    <p className="title">title</p>
                    <div className="content">content</div>
                </div>
            </div>
        </div>
    );
};
  
const NewReleases = () => {
    return <h1 className="title">New Releases Content</h1>;
};

export default hero;