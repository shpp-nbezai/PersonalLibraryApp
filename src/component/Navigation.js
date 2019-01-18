import React from 'react';

export default ({   activePage,
                    goToPage,
                    nextPage,
                    prevPage,
                    pages,
                }) => {
    return (
        <div>
            <button
                className = "button is-link"
                disabled = { activePage === 0 }
                onClick = { () => goToPage(0) }>
                {"<<"}
            </button>
            <button
                className = "button is-link"
                disabled = { activePage === 0}
                onClick = { prevPage }>
                {"<"}
            </button>

            <button
                className = "button is-link"
                disabled = { activePage === pages - 1}
                onClick = { nextPage }>
                {">"}
            </button>
            <button
                className = "button is-link"
                disabled = { activePage === pages - 1 }
                onClick = { () => goToPage( pages - 1 ) }>
                {">>"}
            </button>
        </div>
    );
}
