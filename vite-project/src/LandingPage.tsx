import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <div className="min-h-screen flex flex-col max-w-full ">
                <header className="bg-gray-900 text-white py-2 mb-16">
                    <div className="container mx-auto p-1 flex items-center max-w-screen-xl">
                        <a href="/">
                            <img
                                src={frogaiLogo}
                                alt="FrogAI Logo"
                                className="h-10 mr-5 rounded-full ring-4 ring-gray-700"
                            />
                        </a>
                        <a href="/" className="flex items-center">
                            <h1 className="text-pink-500 text-3xl font-bold  mr-2">
                                FrogAI
                            </h1>
                            <p className="text-sm text-gray-400">
                                Monitor recommendations v1.0.3
                            </p>
                        </a>
                    </div>
                </header>
                <div className="container max-w-screen-xl flex flex-col items-center justify-start h-screen mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 px-5">
                        The best monitor recommender in the world.
                    </h2>
                    <div className="mb-16">
                        <div className="flex items-center">
                            <span className="mr-1 text-lg font-bold">
                                Powered by{' '}
                            </span>
                            <a
                                href="https://discord.gg/ultrawide"
                                target="_blank"
                            >
                                <img
                                    src={meLogo}
                                    alt="Test Image"
                                    className="w-32 invert aspect-video ml-1 bg-gray-900"
                                />
                            </a>
                        </div>
                    </div>
                    <Link to="/recommender">
                        <button className="bg-pink-600 text-white py-2 px-4 rounded-3xl shadow-md  shadow-pink-500/50 hover:shadow-lg  hover:shadow-pink-800/50 transition duration-300 font-semibold text-sm mb-4">
                            Find a monitor
                        </button>
                    </Link>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-5 mx-5 md:my-5 md:mx-10">
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                State-of-the-art algorithm
                            </h3>
                            <p>
                                FrogAI's algorithm recommends only those
                                monitors that are highly regarded by
                                enthusiasts. The algorithm is continuously tuned
                                on enthusiast conversations involving objective
                                measurements from professional reviewers, frog
                                pursuit shots, UFO test shots, without any brand
                                discrimination.
                            </p>
                        </div>
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                Attention to detail
                            </h3>
                            <p>
                                We understand that specifications do not provide
                                the complete picture. As an example, even though
                                most modern 4k 144hz monitors have HDMI 2.1
                                ports, their capabilities in terms of bandwidth
                                may differ. We take into account such factors,
                                and how they affect users on different
                                platforms.
                            </p>
                        </div>
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                No Samsung or Dough (Eve)
                            </h3>
                            <p>
                                All monitors have bad quality control (QC),
                                however Samsung monitors have no QC at all. And
                                Dough monitors never arrive.
                            </p>
                        </div>
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                Professional reviews
                            </h3>
                            <p>
                                FrogAI only references professional monitor
                                reviewers who use standard tools and up-to-date
                                and correct methodology to measure performance
                                metrics. We rely on sources such as RTINGS.com,
                                Hardware Unboxed, techless, Bijan Jamshidi, and
                                others. We do not rely on amateur reviewers or
                                specification readers.
                            </p>
                        </div>
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                All monitors are flawed
                            </h3>
                            <p>
                                We recognize that all monitors have flaws, and
                                purchasing a monitor is about finding the one
                                with the least obtrusive flaws. Therefore, we
                                mention the quirks in every monitor along with
                                our recommendations, allowing users to make
                                informed decisions based on their unique
                                requirements.
                            </p>
                        </div>
                        <div className="col-span-1 md:col-span-1 bg-gray-200 p-7 rounded-xl">
                            <h3 className="text-2xl font-semibold mb-4">
                                User friendly
                            </h3>
                            <p>
                                Despite using complex metrics and algorithms,
                                FrogAI ensures that our recommendations are
                                simple, easy-to-understand, and user-friendly.
                                You can pick the best monitor for your needs
                                without having to become an enthusiast.
                            </p>
                        </div>
                    </div>
                    <footer className="border-t border-gray-300 py-4 w-full mt-20">
                        <div className="container mx-auto">
                            <p className="text-left px-2 text-sm">
                                © 2023 theNullCrown
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
