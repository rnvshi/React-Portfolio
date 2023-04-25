import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section className='about'>
            <section className='container container-fluid'>
                <section className='content'>
                    <span id='name'>ISHA RAHMAN</span>
                    <br></br>
                    <span id='title'><i>full-stack web developer</i></span>
                    <br></br>
                    <section className="img"></section>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue felis, auctor vitae tortor vel,
                    interdum vehicula enim. Fusce vulputate eros at risus imperdiet rhoncus. Sed at quam et sapien mattis
                    vehicula. Nam molestie, nulla sit amet congue tristique, mi eros ullamcorper diam, quis gravida mi ex
                    a massa. Fusce a tellus sit amet orci consequat cursus. Phasellus eget condimentum sapien. Donec
                    consectetur arcu in ex cursus feugiat. Nunc sollicitudin justo vitae lobortis malesuada. Curabitur
                    placerat blandit quam at hendrerit. Aenean dapibus ut risus pulvinar dictum.

                    <section className='cv-btn'>
                        <button> DOWNLOAD CV</button>
                    </section>

                </section>
            </section>
        </section>
    )
}

export default About