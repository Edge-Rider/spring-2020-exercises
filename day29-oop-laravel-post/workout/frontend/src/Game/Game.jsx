import React from 'react';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="game">
                <img src={ this.props.image_url } alt=""/>

                <h2>{ this.props.name }</h2>

                <div className="rating">{ this.props.rating } %</div>
            </div>
        );
    }
}