import React from 'react';
import Topbar from '../../components/Topbar/Topbar';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <Topbar />
            <h1>Page Not Found</h1>
        </div>
    );
};

export default NotFound;