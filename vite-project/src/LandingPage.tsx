import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import frogaiLogo from './assets/frogai.jpg';

const LandingPage: React.FC = () => {
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
                                Monitor recommendations v1.0
                            </p>
                        </div>
                    </div>
                </div>
                <div className="LandingPage">
                    <h2>
                        FrogAI is the best monitor recommender in the world.
                    </h2>
                    <ul>
                        <li>
                            Trained on thousands of conversations in Monitor
                            Enthusiasts
                        </li>
                        <li>
                            Based on the strong opinions of monitor nerds who
                            talk about monitors 24/7 and have nothing better to
                            do
                        </li>
                        <li>
                            Monitors selected based on objective measurements
                            from multiple professional reviewers, enthusiast
                            feedback, frog pursuits and UFO tests
                        </li>
                        <li>
                            Consideration for quirks and flaws in every
                            recommended monitor
                        </li>
                        <li>No Samsung or Dough(Eve) bullshit</li>
                        <li>
                            Attention to detail and nuance (e.g. a generally bad
                            reviewer might have one good review)
                        </li>
                        <li>Algorithm tuned for every possible scenario</li>
                        <li>
                            Links to professional reviews only, no amateurs
                            (Optimum Tech) or advertisements (Linus Tech Tips)
                        </li>
                        <li>
                            Always up-to-date with the latest developments in
                            the monitor sphere
                        </li>
                    </ul>
                    <Link to="/recommender">
                        <button className="button">Get Started</button>
                    </Link>
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
