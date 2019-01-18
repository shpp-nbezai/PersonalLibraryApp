import React, { Component } from 'react';

class GoToPage extends Component {
    render() {

        const {
            goToPage,
            pages,
        } = this.props;

        const options = [];
        for ( let i = 0; i < pages; i++ ) {
            options.push(
                <option value={ i } key={ i }>{ i + 1 }</option>
            );
        }

        return (
            <div>
                Go to page{" "}
                <select
                    className="button"
                    onChange={ (e) => goToPage( parseInt( e.target.value ))}>
                    { options }
                </select>
            </div>
        );
    }
}

export default GoToPage;