import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-titles">
                <span className="header-sub-title">Open Speech</span>
                <span className="header-main-title">Blog</span>
            </div>
            <img 
                src="https://images.pexels.com/photos/7578209/pexels-photo-7578209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Header Img" 
                className="header-img" 
            />
        </div>
    );
};

export default Header;