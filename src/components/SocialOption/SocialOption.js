import { faFacebookSquare, faInstagramSquare, faSquarePinterest, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialOption = () => {
    return (
        <>
            <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faFacebookSquare}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faTwitterSquare}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faSquarePinterest}
                />
                <FontAwesomeIcon
                    className="top-socal-icon"
                    icon={faInstagramSquare}
                />
        </>
    );
};

export default SocialOption;