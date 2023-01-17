import React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from '../components/Topbar/Topbar';

const Root = () => {
    return (
        <div>
            <Topbar />
            <Outlet />
        </div>
    );
};

export default Root;