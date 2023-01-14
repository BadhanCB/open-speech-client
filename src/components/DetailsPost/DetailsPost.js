import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./DetailsPost.css";

const DetailsPost = () => {
    return (
        <div className="details-post">
            <div className="details-post-wrapper">
                <img
                    className="details-post-img"
                    src="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Post Img"
                />
                <div className="details-post-header">
                    <h3 className="details-post-title">
                        Lorem ipsum dolor sit amet.
                    </h3>
                    <div className="details-post-edit">
                        <FontAwesomeIcon
                            className="details-post-icon"
                            icon={faPenToSquare}
                        />
                        <FontAwesomeIcon
                            className="details-post-icon"
                            icon={faTrash}
                        />
                    </div>
                </div>
                <div className="details-post-info">
                    <p className="authon">Author: <b>Badhan</b></p>
                    <p className="post-date">1 hour Ago</p>
                </div>
                <p className="details-post-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam doloremque quo error nesciunt, odio iste quod.
                    Alias ullam molestiae dolor minima iure, fuga aspernatur
                    ipsam, quo dicta similique, totam deserunt nemo ratione
                    mollitia facere laudantium laboriosam deleniti sequi neque?
                    Optio quibusdam nemo cumque reiciendis eligendi magnam
                    perferendis rem iure excepturi dolor minus eveniet debitis
                    aperiam repellendus, architecto deserunt consectetur,
                    beatae, commodi aut consequatur modi natus. Tempore quia qui
                    explicabo dolor! Autem harum corrupti et aspernatur
                    dignissimos rerum aut consequuntur nam architecto beatae
                    provident, eligendi, laudantium quidem dolorem dolore
                    repudiandae quia maiores debitis nesciunt tempore? Corporis
                    voluptatibus labore perferendis dignissimos facere itaque
                    ducimus quod tenetur voluptatum dolor voluptate aliquam
                    atque, voluptatem perspiciatis, est, vitae voluptas impedit
                    laborum reprehenderit laboriosam! Autem voluptate cum eius
                    natus ullam quia aliquam nemo, atque fuga. Quod in quibusdam
                    corrupti. Commodi, mollitia quidem. Est delectus voluptas
                    aperiam tenetur quos aliquid quia alias error possimus
                    perspiciatis. Ipsum placeat dicta aliquam asperiores dolor
                    eum exercitationem sunt alias provident vitae soluta facere
                    consequuntur molestias officiis, quaerat reiciendis
                    recusandae odio facilis pariatur voluptatibus! Molestias
                    error ipsam blanditiis dicta. Dolores cumque corporis quo,
                    neque minima quae reprehenderit molestias, beatae amet
                    tempore asperiores corrupti provident, dignissimos
                    repudiandae nesciunt! Rem ut quibusdam necessitatibus fugit!
                </p>
            </div>
        </div>
    );
};

export default DetailsPost;
