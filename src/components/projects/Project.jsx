import React from 'react';
import { CCarousel } from '@coreui/react';
import { CCarouselCaption } from '@coreui/react';
import { CCarouselItem } from '@coreui/react';
import { CImage } from '@coreui/react';
import LSS from '../../assets/live-sound-searcher.png';
import DailyTasks from '../../assets/daily-tasks.png';
import EComm from '../../assets/e-commerce-backend.png';
import EatsMatch from '../../assets/eats-match.png';
import MiniQuiz from '../../assets/mini-quiz.png';
import TeamProfile from '../../assets/team-profile.png';
import WeatherDash from '../../assets/weather-dashboard.png';
import PWATextEdit from '../../assets/pwa-text-editor.png';
import './Project.scss';

const Project = () => {
    return (
        <>
            <section className='project'>

                <section className='glass'>

                    <section className='text'>
                        <span id='title'>
                            <i>portfolio</i>
                        </span>
                        <br></br>
                        <span id='blurb'>
                            Here is a short summary of works that have been completed during my journey of becoming a full-stack developer.
                            Though they are simple, they demonstrate the various skills I have developed over the past six months. There are
                            more that can be viewed on my GitHub.
                        </span>
                    </section>


                    <CCarousel controls indicators>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/Live-Sound-Searcher' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={LSS} alt="Live Sound Searcher" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>Live Sound Searcher</h5>
                                <p>A web application that allows users to see artists playing live in any US city. Includes capabilities for playing a sample of music, reading artist biographies, and seeing related artists.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/Daily-Planner' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={DailyTasks} alt="Daily Task Tracker" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>Daily Task Tracker</h5>
                                <p>A simple daily planner organized by the hour. Tasks can be added to each time block and saved for later viewing. Time blocks are colour-coded to indicate whether a block is in the past, present, or future in refernece to the current local time.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/E-Commerce-Back-End' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={EComm} alt="E-Commerce Back-End" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>E-Commerce Back-End</h5>
                                <p>A sample of code that can be run in Insomnia to mimick the functionality of an e-commerce website. Features an introduction to object oriented programming.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/acst52/EatsMatch' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={EatsMatch} alt="EatsMatch" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>EatsMatch</h5>
                                <p>EatsMatch allows users to compare food delivery prices from different services, such as UberEats and DoorDash, and automatically tells them where the price is right.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/Mini-Quiz' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={MiniQuiz} alt="Mini Quiz" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>Mini Quiz</h5>
                                <p>An interactive application that tests basic knowledge in front end development. The user is prompted with a series of five questions under a time limit of 2 minutes, and can choose to add their name to a leaderboard. </p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/Team-Profile-Generator' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={TeamProfile} alt="Team Profile Generator" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>Team Profile Generator</h5>
                                <p>A CLI application that accepts a user input of employee information to generate an HTML website displaying a workplace team. The purpose of this application is to facilitate teammate contact information, as well as easy access to employee office numbers and Github profiles.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/PWA-Text-Editor' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={PWATextEdit} alt="PWA Text Editor" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>PWA Text Editor</h5>
                                <p>JATE: Just Another Text Editor. A Progressive Web Application (PWA) with offline capabilities. Powered by IndexedDB. </p>
                            </CCarouselCaption>
                        </CCarouselItem>

                        <CCarouselItem>
                            <a href='https://github.com/rnvshi/Weather-Dashboard' target='_blank' rel='noopener noreferrer'>
                                <CImage className="d-block w-100" src={WeatherDash} alt="Weather Dashboard" />
                            </a>
                            <CCarouselCaption className="d-none d-md-block shadow">
                                <h5>Weather Dashboard</h5>
                                <p>A simple web application to search up current weather and five-day forecast in a given city.</p>
                            </CCarouselCaption>
                        </CCarouselItem>

                    </CCarousel>

                </section>
            </section>
        </>
    )
}

export default Project