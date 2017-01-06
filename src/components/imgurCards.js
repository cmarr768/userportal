import React from 'react';
import ImgurCard from './imgurCard';

const ImgurCards = ({Imgur}) => (
    <div className="columns">
        {Imgur.map(function (item) {
            return (
                <div className="column">
                    <ImgurCard
                        key={item.id}
                        {...item}
                        />
                </div>
            )
        })}
    </div>
);

export default ImgurCards;