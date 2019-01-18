import React from "react";

export default ({
                    setSortBy,
                    sortBy,
                    direction,
                    toggleDirection,
                }) => {

    const columns = [
        { key: "id", title: "ID" },
        { key: "name", title: "Name" },
        { key: "rate", title: "Rate" }
    ];
    const items = columns.map(({ key, title }) => {

        const active = key === sortBy;

        return (
            <button className="button is-link is-fullwidth"
                    key={ key }
                    onClick={() => {

                        if ( active ) {
                            toggleDirection();
                        }

                        setSortBy( key );
                    }}>
                { title } { active ? direction === "asc" ? "▲" : "▼" : null }
            </button>
        );
    });
    return (
        <div>
            { items }
        </div>
    )
}
