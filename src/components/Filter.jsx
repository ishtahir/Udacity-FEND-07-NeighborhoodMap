import React, { Component } from 'react';

class Filter extends Component {
    handleClicks(index) {
        const {infowindow, map, content, markers} = this.props;
        infowindow.setContent(content[index]);
        infowindow.open(map, markers[index]);
    }

    render() {
        const {locations, query} = this.props;
        return (
            <div className="content">
                <ul>
                    {locations
                        .filter(location => location.name.toLowerCase().includes(query.toLowerCase()))
                        .map((location, index) => {
                            return <li className="list-item" key={index} onClick={this.handleClicks.bind(this, index)}>{location.name}</li>})
                    }
                </ul>
            </div>
        )
    }
}

export default Filter;
