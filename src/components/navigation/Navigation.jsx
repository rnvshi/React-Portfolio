import React from 'react';
import './Navigation.css';

function Navigation({ currentPage, handlePageChange }) {
    return (
        <section class='nav-bar'>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        href="#about"
                        onClick={() => handlePageChange('About')}

                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    >
                        ABOUT
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#project"
                        onClick={() => handlePageChange('Project')}

                        className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
                    >
                        PROJECTS
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#contact"
                        onClick={() => handlePageChange('Contact')}

                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >
                        CONTACT
                    </a>
                </li>
            </ul>
        </section>
    );
}

export default Navigation;
