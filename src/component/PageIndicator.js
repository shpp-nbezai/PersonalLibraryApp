import React from 'react';

export default ({ pages, activePage }) => {

    return (
        <div>
            <b>{ activePage + 1 }</b> / { pages }
        </div>
    );
}
