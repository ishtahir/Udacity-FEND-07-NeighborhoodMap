import React, { Component } from 'react';
import GoogleMap from './components/GoogleMap.jsx';
import './App.css';

class App extends Component {
    // add state here
    state = {
        query: ''
    }

    static defaultProps = {
        locations: [
            {name: 'Connally High School', loc: {lat: 30.4192234, lng: -97.6762375}, address: '13212 N Lamar Blvd, Austin, TX 78753', phone: '512-594-0800'},
            {name: 'Pflugerville High School',loc: {lat: 30.4448663, lng: -97.6337909}, address: '1301 W Pecan St, Pflugerville, TX 78660', phone: '512-594-0500'},
            {name: 'Hendrickson High School',loc: {lat: 30.4656629, lng: -97.5878583}, address: '19201 Colorado Sand Dr, Pflugerville, TX 78660', phone: '512-594-1100'},
            {name: 'Weiss High School',loc: {lat: 30.4291442, lng: -97.56574520000001}, address: '5201 Wolf Pack Dr, Pflugerville, TX 78660', phone: '512-594-1400'},
            {name: 'Pflugerville Academic Center of Excellence',loc: {lat: 30.446406, lng: -97.63657909999999}, address: '1401-B W Pecan St, Pflugerville, TX 78660', phone: '512-594-1900'}
        ]
    }

    handleFilter(query) {
        this.setState({ query });
    }

    render() {
        const {query} = this.state;
        const {locations} = this.props;
        return (
            <div className="app-container">
                <header className="header">
                    <input type="text" placeholder="Filter items" className="search" onChange={event => this.handleFilter(event.target.value)} value={query}/>
                    <h1 className="title">Map of Pflugerville, TX</h1>
                </header>
                <GoogleMap locations={this.props.locations} query={this.state.query} />
                <div className="content">
                    <ul>
                        {locations
                            .filter(location => location.name.toLowerCase().includes(query.toLowerCase()))
                            .map((location, index) => {
                                return <li className="sidebar-item" key={index} onClick={this.showInfoWindow.bind(this)}>{location.name}</li>})
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;
