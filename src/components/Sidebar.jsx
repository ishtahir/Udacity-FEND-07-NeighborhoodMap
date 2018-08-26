import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <input type="text" className="search" placeholder="Filter items" />
            </div>
        )
    }
}

export default Sidebar;
