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
                        <button className="button">Find a monitor</button>
                    </Link>
                    {/* <div className="discord-link">
                        <p>
                            Want to learn more about monitors? Take our{' '}
                            <a
                                href="/crash-course"
                                className="monitor-enthusiasts-link"
                            >
                                30 min crash course.
                            </a>
                        </p>
                    </div> */}
                    <ul>
                        <li>
                            <h3>State-of-the-art algorithm</h3>
                            <p>
                                FrogAI's algorithm recommends only those
                                monitors that are highly regarded by
                                enthusiasts. The algorithm is continuously
                                trained on enthusiast conversations that involve
                                discussion about objective measurements from
                                multiple professional reviewers, frog pursuit
                                shots, and UFO test shots, without any brand
                                discrimination. This is followed by manual
                                tuning for more precise recommendations.
                            </p>
                        </li>
                        <li>
                            <h3>Attention to detail</h3>
                            <p>
                                We understand that specifications do not provide
                                the complete picture. As an example, even though
                                most modern 4k 144hz monitors have HDMI 2.1
                                ports, their capabilities in terms of bandwidth
                                may differ. We take into account such factors,
                                and how they affect users on different
                                platforms, along with various other details.
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
                                FrogAI only references professional monitor
                                reviewers who use standard tools and up-to-date
                                and correct methodology to measure performance
                                metrics. We rely on sources such as RTINGS.com,
                                Hardware Unboxed, techless, Bijan Jamshidi, and
                                others. We do not refer to amateur reviewers or
                                specification readers.
                            </p>
                        </li>
                        <li>
                            <h3>All monitors are flawed</h3>
                            <p>
                                We recognize that all monitors have flaws, and
                                purchasing a monitor is about finding the one
                                with the least obtrusive flaws. Therefore, we
                                mention the quirks in every monitor along with
                                our recommendations, allowing users to make
                                informed decisions based on their unique
                                requirements.
                            </p>
                        </li>
                        <li>
                            <h3>User friendly</h3>
                            <p>
                                Despite using complex metrics and algorithms,
                                FrogAI ensures that our recommendations are
                                simple, easy-to-understand, and user-friendly.
                                You can pick the best monitor for your needs
                                without having to become an enthusiast.
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
