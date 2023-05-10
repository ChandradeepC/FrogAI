import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import frogaiLogo from './assets/frogai.jpg';

const LandingPage: React.FC = () => {
    // useEffect(() => {
    //     document.body.classList.add('landing-wrapper');
    //     return () => {
    //         document.body.classList.remove('landing-wrapper');
    //     };
    // }, []);

    return (
        <div>
            <div className="wrapper">
                <div className="header-container">
                    <div className="color-bar"></div>
                    <div className="brand">
                        <img
                            src={frogaiLogo}
                            alt="FrogAI Logo"
                            className="frogai-logo"
                        />
                        <div className="logo-text">
                            <h1 className="header">FrogAI</h1>
                            <p className="tagline">
                                Monitor recommendations v1.0.1
                            </p>
                        </div>
                    </div>
                </div>
                <div className="LandingPage">
                    <h2>The best monitor recommender in the world.</h2>
                    <Link to="/recommender">
                        <button className="button">Get Started</button>
                    </Link>
                    <ul>
                        <li>
                            <h3>Relevant products</h3>
                            <p>
                                Monitors selected by enthusiasts based on
                                objective measurements from multiple
                                professional reviewers, enthusiast feedback,
                                frog pursuits and UFO tests. Always up-to-date
                                with the latest developments.
                            </p>
                        </li>
                        <li>
                            <h3>Attention to detail</h3>
                            <p>
                                Consideration for quirks and flaws in every
                                recommended monitor. Algorithm tuned for every
                                possible user situation. Consideration for how
                                individual monitors play with different
                                platforms like consoles and special use cases.
                            </p>
                        </li>
                        <li>
                            <h3>Zero bullshit</h3>
                            <p>
                                No Samsung or Dough(Eve) recommendations. Links
                                to professional reviews only, no amateurs
                                (Optimum Tech) or advertisements/specification
                                readers (Linus Tech Tips){' '}
                            </p>
                        </li>
                    </ul>
                    {/* <Link to="/recommender">
                        <button className="button">Get Started</button>
                    </Link> */}
                </div>
            </div>
            <div className="footer-container">
                <div className="bottom-text">
                    <p>© 2023 theNullCrown</p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
