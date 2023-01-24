import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailsPost.css";
import imageNotFound from "../../images/image-not-found.jpg";
import { useContext } from "react";
import { Context } from "../../context/Context";

const DetailsPost = () => {
    const [post, setPost] = useState({});
    const { postID } = useParams();
    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSinglePost = async () => {
            const res = await axios.get(
                `https://open-speech-server-production.up.railway.app/posts/get/${postID}`
            );
            setPost(res.data);
        };

        fetchSinglePost();
    }, [postID]);

    const { _id, title, desc, username, createdAt, photo } = post;
    const photoURL = "https://open-speech-server-production.up.railway.app/images/" + photo;

    const handleDelete = async () => {
        try {
            await axios.delete(`https://open-speech-server-production.up.railway.app/posts/delete/${_id}`, {
                data: { username: user.username },
            });
            navigate("/");
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="details-post">
            <div className="details-post-wrapper">
                <img
                    className="details-post-img"
                    src={photoURL || imageNotFound}
                    alt="Post Img"
                />
                <div className="details-post-header">
                    <h3 className="details-post-title">{title}</h3>
                    {username === user.username && (
                        <div className="details-post-edit">
                            <FontAwesomeIcon
                                className="details-post-icon"
                                icon={faPenToSquare}
                            />
                            <FontAwesomeIcon
                                className="details-post-icon"
                                icon={faTrash}
                                onClick={handleDelete}
                            />
                        </div>
                    )}
                </div>
                <div className="details-post-info">
                    <p className="authon">
                        Author: <b>{username}</b>
                    </p>
                    <p className="post-date">
                        {new Date(createdAt).toDateString()}
                    </p>
                </div>
                <p className="details-post-description">{desc}</p>
            </div>
        </div>
    );
};

export default DetailsPost;
