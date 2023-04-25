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
            <section className="project">Project

                <CCarousel controls indicators>
                    <CCarouselItem>
                        <CImage className="d-block w-100" src={LSS} alt="slide 1" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={DailyTasks} alt="slide 2" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={EComm} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>

                        <CImage className="d-block w-100" src={EatsMatch} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={EComm} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={MiniQuiz} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={TeamProfile} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={PWATextEdit} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                    <CCarouselItem>
                        <CImage className="d-block w-100" src={WeatherDash} alt="slide 3" />
                        <CCarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CCarouselCaption>
                    </CCarouselItem>

                </CCarousel>

            </section>
        </>
    )
}

export default Project