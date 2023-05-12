import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import frogaiLogo from './assets/frogai.jpg';
import meLogo from './assets/test.png';

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
                                Monitor recommendations v1.0.2
                            </p>
                        </div>
                    </div>
                </div>

                <div className="LandingPage">
                    <h2>The best monitor recommender in the world.</h2>
                    <div className="promo">
                        <span>Powered by </span>
                        <a href="https://discord.gg/ultrawide" target="_blank">
                            <img
                                src={meLogo}
                                alt="Test Image"
                                className="melogo"
                            />
                        </a>
                    </div>
                    <Link to="/recommender">
                        <button className="button">Get Started</button>
                    </Link>
                    <ul>
                        <li>
                            <h3>State-of-the-art algorithm</h3>
                            <p>
                                FrogAI only recommends monitors that enthusiasts
                                would recommend themselves. The algorithm is
                                regularly trained on enthusiast discussions
                                followed my manual tuning. That is, monitors
                                that are relevant based on objective
                                measurements aggregated from multiple
                                professional reviewers, frog pursuits and UFO
                                tests without any discrimination based on brand.
                            </p>
                        </li>
                        <li>
                            <h3>Attention to detail</h3>
                            <p>
                                The specifications do not tell the entire story.
                                Even though most modern 4k 144hz monitors have
                                HDMI 2.1 ports, not all of them have the same
                                capabilities in terms of bandwidth. We take into
                                consideration such factors and how it affects
                                users on different platforms and various other
                                details.
                            </p>
                        </li>
                        <li>
                            <h3>No Samsung or Dough (Eve)</h3>
                            <p>
                                All monitors have bad quality control (QC),
                                however Samsung monitors have no QC at all. And
                                Dough monitors never arrive.
                            </p>
                        </li>
                        <li>
                            <h3>Professional reviews</h3>
                            <p>
                                A professional monitor reviewer is one that uses
                                standard tools and up-to-date and correct
                                methodology to measure performance metrics of a
                                monitor. FrogAI only references professional
                                reviewers like RTINGS.com, Hardware Unboxed,
                                techless, Bijan Jamshidi and others. We do not
                                reference amateur reviewers or specification
                                readers.
                            </p>
                        </li>
                        <li>
                            <h3>All monitors are flawed</h3>
                            <p>
                                We understand that all monitors are flawed and
                                buying a monitor is all about finding the one
                                with the least flaws. However different quirks
                                affect different people in different ways so we
                                mention the quirks in every monitor along with
                                the recommendation and let the user decide if it
                                is a worthy compromise.
                            </p>
                        </li>
                        <li>
                            <h3>User friendly</h3>
                            <p>
                                FrogAI uses complex metrics and algorithms under
                                the hood to decide the best recommendations for
                                your requirements but only exposes simple,
                                easy-to-understand information about the
                                monitors so that you can pick the best monitor
                                without having to become a enthusiast.
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
