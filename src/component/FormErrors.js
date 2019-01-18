import React from 'react';

export default ({ formErrors }) => {
    return (
        <div>
            { Object.keys( formErrors ).map(( fieldName, i ) => {
                if( formErrors[ fieldName ].length > 0 ){
                    return (
                        <p
                            className='has-background-danger has-text-white'
                            key={ i }>
                            { fieldName } { formErrors[ fieldName ]}
                        </p>
                    )
                } else {
                    return '';
                }
            })}
        </div>
    );
};

