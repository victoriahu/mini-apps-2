import React from "react";
import ReactPaginate from 'react-paginate';


class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <div class="row">
            <em>Description</em>
            <div class ="column"><em>Date</em></div>
            {this.props.data.map(event => {
                return (
                    <div>
                    <div class="column">{event.date}</div>
                    <div class="column">{event.description}</div>
                    </div>
                )
            })}
            </div>
        )
    }

}

export default Results;