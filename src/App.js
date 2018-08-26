import React, { Component } from 'react';
import Sidebar from './components/Sidebar.jsx';
import GoogleMap from './components/GoogleMap.jsx';
import './App.css';

class App extends Component {
    static defaultProps = {
        locations: [
            {name: 'Connally High School', loc: {lat: 30.4192234, lng: -97.6762375}, address: '13212 N Lamar Blvd, Austin, TX 78753'},
            {name: 'Pflugerville High School',loc: {lat: 30.4448663, lng: -97.6337909}, address: '1301 W Pecan St, Pflugerville, TX 78660'},
            {name: 'Hendrickson High School',loc: {lat: 30.4656629, lng: -97.5878583}, address: '19201 Colorado Sand Dr, Pflugerville, TX 78660'},
            {name: 'Weiss High School',loc: {lat: 30.4291442, lng: -97.56574520000001}, address: '5201 Wolf Pack Dr, Pflugerville, TX 78660'},
            {name: 'Pflugerville Academic Center of Excellence',loc: {lat: 30.446406, lng: -97.63657909999999}, address: '1401-B W Pecan St, Pflugerville, TX 78660'}
        ]
    }

    render() {
        return (
            <div className="app-container">
                <header className="header">
                    <span className="menu-icon">☰</span><h1 className="title">Map of Pflugerville, TX</h1>
                </header>
                <Sidebar locations={this.props.locations} />
                <GoogleMap locations={this.props.locations} />
            </div>
        );
    }
}

export default App;
