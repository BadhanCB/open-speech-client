import { faFacebookSquare, faInstagramSquare, faSquarePinterest, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
        <div className='top-bar'>
            <div className="socal-container">
                <FontAwesomeIcon className='top-socal-icon' icon={faFacebookSquare} />
                <FontAwesomeIcon className='top-socal-icon' icon={faTwitterSquare} />
                <FontAwesomeIcon className='top-socal-icon' icon={faSquarePinterest} />
                <FontAwesomeIcon className='top-socal-icon' icon={faInstagramSquare} />
            </div>
            <div className="menu-container">
                <ul className="menu-list">
                    <li className="menu-list-item">HOME</li>
                    <li className="menu-list-item">ABOUT</li>
                    <li className="menu-list-item">CONTACT</li>
                    <li className="menu-list-item">WRITE</li>
                    <li className="menu-list-item">LOGOUT</li>
                </ul>
            </div>
            <div className="option-container">
                <img 
                    className='top-image'
                    src="https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Banner Img" 
                />
                <FontAwesomeIcon className='top-search-icon' icon={faSearch} />
            </div>
        </div>
    );
};

export default Topbar;