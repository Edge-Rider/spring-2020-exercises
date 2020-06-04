import React from 'react';
import Game from '../Game/Game.jsx';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            orderby: 'name',
            orderway: 'asc'
        };
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(state) {
        if (this.state.orderby != state.orderby) {
           this.loadData();
        }
    }

    loadData() {
        if (this.props.url) {
            this.setState({ 
                loading: true,
                data: []
            })

            let url = this.props.url;
            url += '?orderby=' + this.state.orderby;
            url += '&way=' + this.state.orderway;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.setState({ 
                        data: data
                    })
                })
                .finally(this.setState({
                    loading: false
                }));
        }
    }

    handleOrderByRating = (ev) => {
        this.setState({
            orderby: 'rating'
        })
    }

    render() {

        let content = (
            <div className="message">Loading...</div>
        )

        if (!this.state.loading) {
            content = (
                <>
                    <h1>List of games</h1>
                    {
                        this.state.data.map(item => ( 
                            <Game key={ item.name } { ...item } />
                        ))
                    }

                    <button onClick={ this.handleOrderByRating }>Order by rating</button>
                </>
            )
        }
        
        return (
            <div className="games">
                { content }
            </div>
        );
    }
}