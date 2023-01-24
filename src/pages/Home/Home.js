import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const res = await axios.get("https://open-speech-server-production.up.railway.app/posts/get");
            setPosts(res.data);
        }
        
        fetchPost();
    }, []);

    return (
        <div className='home'>
            <Header />
            <main className='home-main-container'>
                <Posts posts={posts} />
                <Sidebar />
            </main>
        </div>
    );
};

export default Home;