import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        const { locations } = this.props;
        return (
            <div className="dropdown">
                <input type="text" className="search" placeholder="Filter items" />
                
            </div>
        )
    }
}

export default Sidebar;
