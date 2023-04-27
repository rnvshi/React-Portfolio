import React from 'react';
import './About.scss';
import Avatar from '../../assets/avatar.png';
import Resume from '../../assets/resume.pdf';

const About = () => {
    return (
        <section className='about'>
            <section className='container container-fluid'>
                <section className='content'>
                    <span id='proName'>ISHA RAHMAN</span>
                    <br></br>
                    <span id='title'><i>full-stack web developer</i></span>
                    <br></br>
                    <img src={Avatar} id='avatar' alt='avatar'></img>

                    <p>
                        Hello and welcome to my little corner of the Internet !
                        My name is Isha and I am a lab technician turned budding web developer
                        currently embarking on a journey in full-stack. Over a short period of
                        time I've picked up and refined my skills in HTML5, CSS, JavaScript,
                        Node.js, mySQL, MongoDB, Express, object-oriented programming, and
                        creating progressive web applications, among many others. This website is a demonstration
                        of what I have learned so far, though I'm eager to deepen my knowledge
                        even more.
                        <br></br>
                        Please enjoy your stay.
                    </p>

                    <section className='cv-btn'>
                        <a href={Resume} download>
                            <button> DOWNLOAD CV</button>
                        </a>
                    </section>

                </section>
            </section>
        </section>
    )
}

export default About