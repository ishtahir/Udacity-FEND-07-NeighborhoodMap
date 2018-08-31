import React, { Component } from 'react';

class Filter extends Component {
    handleClicks(location) {
        const {infowindow, map, contents, markers} = this.props;

        markers.filter(marker => marker.title === location.name).forEach(marker => {
            infowindow.setContent(String(contents.filter(content => String(content).slice(5).includes(location.name))));
            infowindow.open(map, marker);
            marker.setAnimation(window.google.maps.Animation.BOUNCE)
            setTimeout(function() {
                marker.setAnimation(null)
            }, 100)
        });
    }

    render() {
        const {locations, query} = this.props;
        return (
            <div className="content">
                <ul>
                    {locations
                        .filter(location => location.name.toLowerCase().includes(query.toLowerCase()))
                        .map((location, index) => {
                            return <li className="list-item" key={index} onClick={this.handleClicks.bind(this, location)}>{location.name}</li>})
                    }
                </ul>
            </div>
        )
    }
}

export default Filter;
