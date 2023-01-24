import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";
import imageNotFound from "../../images/image-not-found.jpg";

const Post = ({ post }) => {
    const navigate = useNavigate();
    const { _id, title, desc, createdAt, photo, categories } = post;
    const photoURL = "https://open-speech-server-production.up.railway.app/images/" + photo;
    
    return (
        <div className="post">
            <img
                className="post-img"
                src={photoURL || imageNotFound}
                alt="Post Img"
            />
            <div className="post-info">
                <div className="post-categories">
                    {
                        categories.map(cat => <span className="category" key={Math.random()}>{cat}</span>)
                    }
                </div>
                <h4 className="post-title" onClick={() => navigate(`/post/${_id}`)}>{title}</h4>
                <hr />
                <p>
                    <small className="post-date">{new Date(createdAt).toDateString()}</small>
                </p>
            </div>
            <p className="post-description">{desc}</p>
        </div>
    );
};

export default Post;
