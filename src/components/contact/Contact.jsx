import React from 'react';
import './Contact.scss';

const Contact = ({ validName, validEmail, submitForm }) => {

    return (

        <>

            <section className='contact'>
                <section className='contactForm'>

                    <header>CONTACT ME</header>

                    <form id="form">

                        <input id="name" type="text" placeholder="NAME" onBlur={validName}></input>
                        <p id='nameInput'></p>
                        <input id="email" type="text" placeholder="E-MAIL" onBlur={validEmail}></input>
                        <p id='emailInput'></p>
                        <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                        <input
                            id="submit"
                            type="submit"
                            value="SUBMIT"
                            onClick={submitForm}></input>

                    </form>
                </section>
            </section>

        </>
    )
}

export default Contact