import React from 'react';
import RateMarker from "../component/RateMarker";

export default ({
                    rate,
                    maxRate,
                    handleBookRate
                }) => {

        let RATE_COUNTER = [...Array( maxRate ).keys()].map( index => index + 1 );

        let markers = RATE_COUNTER.map( item => {
                    return (
                        <div
                            className="level-item"
                            key={ item }>
                            <RateMarker
                                filled={ item <= rate }
                                rate={ item }
                                handleBookRate={ handleBookRate }
                            />
                        </div>
                    )
        });

        return (
            <div className="level">
                { markers }
            </div>
        );
};
