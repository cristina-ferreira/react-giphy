import React from 'react';

const SelectedGif = ({ selectedGif }) => (
    <div className="selected-gif">
        <img src={selectedGif} alt="" />
    </div>
);
export default SelectedGif;
