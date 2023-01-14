import React from 'react';
import DetailsPost from '../../components/DetailsPost/DetailsPost';
import Sidebar from '../../components/Sidebar/Sidebar';
import './SinglePost.css';

const SinglePost = () => {
    return (
        <div className='single-post'>
            <DetailsPost />
            <Sidebar />
        </div>
    );
};

export default SinglePost;