import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        const { locations } = this.props;
        return (
            <div className="sidebar">
                <input type="text" className="search" placeholder="Filter items" />
                <ul>
                    {locations.map((location, index) => {
                        return <li key={index} className="sidebar-item">{location.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Sidebar;
