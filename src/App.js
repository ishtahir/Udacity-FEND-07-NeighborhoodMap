import React, { Component } from 'react';
import logo from './logo.svg';
import GoogleMapReact from 'google-map-react';
import './App.css';

class App extends Component {
    state = {
        center: {lat: 40.73, lng: -73.93},
        zoom: 12
    };

    render() {
        return (
            <div className="App" style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyDYDXMsbIg9zQq37WQwH4Fe0azIhSg7kcY'}}
                    defaultCenter={this.props.center}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                ></GoogleMapReact>
            </div>
        );
    }
}

export default App;
