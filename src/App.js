import React, { Component } from 'react';
import logo from './logo.svg';
import GoogleMapReact from 'google-map-react';
import './App.css';

class GoogleMap extends Component {
    static defaultProps = {
        center: {lat: 30.4548, lng: -97.6223},
        zoom: 13
    };

    render() {
        return (
            <div className="App" style={{ height: '100vh', width: '100%'}}>
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyBuOtZ4Xw9Wo4EK96HJ5Xmrs4Rz9sv5P1c'}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                ></GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;

// import React, { Component } from 'react';
//
// class GoogleMap extends Component {
//     state = {
//         mapIsReady: false,
//     };
//
//     componentDidMount() {
//         const apiKey = 'AIzaSyBuOtZ4Xw9Wo4EK96HJ5Xmrs4Rz9sv5P1c';
//         const script = document.createElement('script');
//         script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
//         script.async = true;
//         script.defer = true;
//         script.addEventListener('load', () => {
//             this.setState({ mapIsReady: true });
//         });
//
//         document.body.appendChild(script);
//     }
//
//     componentDidUpdate() {
//         if (this.state.mapIsReady) {
//             // Display the map
//             this.map = new window.google.maps.Map(document.getElementById('map'), {
//                 center: {lat: 30.4548, lng: -97.6223},
//                 zoom: 13,
//                 mapTypeId: 'roadmap',
//             });
//             // You also can add markers on the map below
//         }
//     }
//
//     render() {
//         return (
//             <div id="map" style={{height: '100vh', width: '100%'}} />
//         );
//     }
// }
//
// export default GoogleMap;
