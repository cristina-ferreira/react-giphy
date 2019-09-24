import React from 'react';

const Gif = ({ gif, handleClickGif }) => {
    const handleClick = () => handleClickGif(gif.images.original.url);

    return (
        <img src={gif.images.original.url} alt="" onClick={handleClick} role="presentation" />
    );
};
export default Gif;
