import React, { useState } from 'react';
import Navigation from './navigation/Navigation';
import About from './about/About';
import Project from './projects/Project';
import Contact from './contact/Contact';

export default function PortfolioContainer() {

    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Project') {
            return <Project />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

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
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            <Contact validName={validName} validEmail={validEmail} submitForm={submitForm} />
            {renderPage()}
        </div>
    );
}