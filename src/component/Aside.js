import React from 'react';
import SortMenu from '../component/SortMenu';
import BookEditor from '../component/BookEditor';

export default ({
                    handleChangeSearchQuery,
                    searchQuery,
                    setPaginate,
                    setSortBy,
                    sortBy,
                    direction,
                    toggleDirection,
                    bookEditor,
                    book,
                    updateAppData,
                    maxRate,
                }) => {

    return (
        <div className=" has-background-primary">
            {
                bookEditor ?
                    <BookEditor
                        book = { Object.assign( {}, book )}
                        maxRate = { maxRate }
                        updateAppData = { updateAppData }
                    />
                    :
                    <SortMenu
                        handleChangeSearchQuery = { handleChangeSearchQuery }
                        searchQuery = { searchQuery }
                        setPaginate = { setPaginate }
                        setSortBy = { setSortBy }
                        sortBy = { sortBy }
                        direction = { direction }
                        toggleDirection = { toggleDirection }
                    />
            }
        </div>
    );
};
