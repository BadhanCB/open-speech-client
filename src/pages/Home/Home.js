import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Topbar />
            <Header />
            <main className='home-main-container'>
                <Posts />
                <Sidebar />
            </main>
        </div>
    );
};

export default Home;