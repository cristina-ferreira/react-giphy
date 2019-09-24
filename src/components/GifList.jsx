import React from 'react';
import Gif from './Gif';

const GifList = ({ gifs, handleClickGif }) => (
    <div className="giflist" >
        {gifs.map(gif => <Gif gif={gif} key={gif.id} handleClickGif={handleClickGif} />) }
    </div>
);

export default GifList;
