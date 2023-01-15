import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WritePost.css";

const WritePost = () => {
    return (
        <div className="write">
            {/* demo img */}
            <img 
                src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="demo img" 
                className="write-img"
            />
            <form className="write-form">
                <div className="write-form-group">
                    <label htmlFor="fileInput">
                        <FontAwesomeIcon icon={faPlus} className="write-form-icon" />
                    </label>
                    <input
                        type="file"
                        name="fileInput"
                        id="fileInput"
                        style={{ display: "none" }}
                    />
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Title"
                        className="write-input"
                        autoFocus={true}
                    />
                </div>
                <div className="write-form-group">
                    <textarea
                        name="post-desc"
                        id="post-desc"
                        placeholder="Details About Your Speech"
                        className="write-input write-text"
                    ></textarea>
                </div>
                <button className="write-submit-btn">Publish</button>
            </form>
        </div>
    );
};

export default WritePost;
