import React from 'react';

export default ({ filled, rate, handleBookRate }) => {

    const FILLED_IMG_SRC = "img/Star-icon-1.ico";
    const UN_FILLED_IMG_SRC = "img/Star-icon-2.ico";

    let imgSrc = filled ? FILLED_IMG_SRC : UN_FILLED_IMG_SRC;

    return (
        <div className = "rate-marker">
            <label>
                <input
                    type="radio"
                    name="rate"
                    value={ rate }
                    onChange={ handleBookRate }
                />
                <img
                    src={ imgSrc }
                    alt="rate marker"
                />
            </label>
        </div>
    );
};
