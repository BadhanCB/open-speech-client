import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";
import "./WritePost.css";

const WritePost = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        alert("Please Login First or Create new one");
        !user && navigate("/login");
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            desc,
            username: user.username,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post("https://open-speech-server-production.up.railway.app/file/upload", data);
            } catch (e) {
                alert(e);
            }
        }

        try {
            const res = await axios.post(
                "https://open-speech-server-production.up.railway.app/posts/create",
                newPost
            );
            navigate(`/post/${res.data._id}`);
        } catch (e) {
            alert(e);
        }
    };

    return (
        <div className="write">
            {file && (
                <img
                    src={URL.createObjectURL(file)}
                    alt="demo img"
                    className="write-img"
                />
            )}
            <form className="write-form" onSubmit={handleSubmit}>
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon
                            icon={faPlus}
                            className="write-form-icon"
                        />
                    </label>
                    <input
                        type="file"
                        name="fileInput"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="write-input"
                        autoFocus={true}
                        onBlur={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="write-form-group">
                    <textarea
                        name="post-desc"
                        id="post-desc"
                        placeholder="Details About Your Speech"
                        className="write-input write-text"
                        onBlur={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="write-submit-btn">
                    Publish
                </button>
            </form>
        </div>
    );
};

export default WritePost;
