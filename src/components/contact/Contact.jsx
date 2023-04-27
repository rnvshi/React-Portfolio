import React from 'react';
import './Contact.scss';

const Contact = () => {

    const validName = (event) => {

        const nameRegex = /^[a-z ,.'-]+$/i;
        let name = event.target.value;
        const p = document.getElementById('nameInput');

        if (!name) {
            p.innerHTML = 'This field cannot be empty.';
        } else if (nameRegex.test(name) !== true) {
            p.innerHTML = 'Invalid name entry.'
        } else {
            p.innerHTML = ''
        }
    };

    const validEmail = (event) => {

        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let email = event.target.value;
        const p = document.getElementById('emailInput');

        if (!email) {
            p.innerHTML = 'This field cannot be empty.';
        } else if (emailRegex.test(email) !== true) {
            p.innerHTML = 'Invalid email entry.'
        } else {
            p.innerHTML = ''
        }
    };

    const submitForm = (event) => {
        event.preventDefault();

        let name = event.target.parentNode.children[0];
        let email = event.target.parentNode.children[2];

        name.value = '';
        email.value = '';
    }

    return (

        <>
            <section className='contact'>
                <section className='contactForm'>

                    <header><i>contact me</i></header>
                    <p id='contactText'>
                        Have further questions or want to reach out for a chat ? Don't be shy.
                    </p>

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
                            onClick={submitForm}
                        ></input>

                    </form>
                </section>
            </section>

        </>
    )
}

export default Contact