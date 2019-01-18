import React from 'react';
import SortButtons from '../component/SortButtons';

export default ({
                    handleChangeSearchQuery,
                    searchQuery,
                    setPaginate,
                    setSortBy,
                    sortBy,
                    direction,
                    toggleDirection,
                }) => {

        return (
            <div className="has-background-primary">
                <div className="">
                    <label
                        htmlFor="search"
                        className="label">
                        Search
                    </label>
                    <input
                        type="text"
                        id="search"
                        className="input"
                        onChange={ handleChangeSearchQuery }
                        defaultValue={ searchQuery }/>
                </div>
                <div className="">
                    <label
                        htmlFor="sort"
                        className="label">
                        Sort By
                    </label>
                    <div>
                        <SortButtons
                            setSortBy = { setSortBy }
                            sortBy = { sortBy }
                            direction = { direction }
                            toggleDirection = { toggleDirection }/>
                    </div>
                </div>
                <div className="">
                    <label
                        htmlFor="paginate"
                        className="label">
                        Paginate By
                    </label>
                    <div className="select" id="paginate">
                        <select
                            id="paginate"
                            onChange={ (e) => setPaginate(parseInt( e.target.value ))}>
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                            <option>50</option>
                        </select>
                    </div>
                </div>
            </div>
        );
};
