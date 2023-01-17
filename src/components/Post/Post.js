import React from "react";
import { useNavigate } from "react-router-dom";
import "./Post.css";

const Post = () => {
    const navigate = useNavigate();

    return (
        <div className="post">
            <img
                className="post-img"
                src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Post Img"
            />
            <div className="post-info">
                <div className="post-categories">
                    <span className="category">Tech</span>
                    <span className="category">Programming</span>
                </div>
                <h4 className="post-title" onClick={() => navigate("/post/1")}>Web Programming</h4>
                <hr />
                <p>
                    <small className="post-date">1 Hour Ago</small>
                </p>
            </div>
            <p className="post-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                hic sint quasi cum voluptatum doloribus aperiam illo quaerat
                iste fugit eveniet explicabo, in repellendus consequatur eius
                voluptas? Molestiae totam dolorem dolor fugiat, magni dolores
                voluptatibus nostrum illum vel, animi, quod possimus iure.
                Provident laboriosam nesciunt quisquam fuga aspernatur deserunt
                adipisci.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                hic sint quasi cum voluptatum doloribus aperiam illo quaerat
                iste fugit eveniet explicabo, in repellendus consequatur eius
                voluptas? Molestiae totam dolorem dolor fugiat, magni dolores
                voluptatibus nostrum illum vel, animi, quod possimus iure.
                Provident laboriosam nesciunt quisquam fuga aspernatur deserunt
                adipisci.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                hic sint quasi cum voluptatum doloribus aperiam illo quaerat
                iste fugit eveniet explicabo, in repellendus consequatur eius
                voluptas? Molestiae totam dolorem dolor fugiat, magni dolores
                voluptatibus nostrum illum vel, animi, quod possimus iure.
                Provident laboriosam nesciunt quisquam fuga aspernatur deserunt
                adipisci.
            </p>
        </div>
    );
};

export default Post;
