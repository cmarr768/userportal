import React from 'react';

const ImgurCard = ({id, cover, title}) => (
    <div className="card">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={"http://i.imgur.com/" + cover + ".jpg"} alt="Image" />
            </figure>
        </div>
        <div className="card-content">

            <div className="content">
                {title}
                <br />
                <small></small>
            </div>
        </div>
    </div>
);

export default ImgurCard;