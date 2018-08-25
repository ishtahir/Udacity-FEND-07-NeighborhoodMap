import React, { Component } from 'react';

class GoogleMap extends Component {
    state = {
        mapIsReady: false,
    };

    componentDidMount() {
        const apiKey = 'AIzaSyBuOtZ4Xw9Wo4EK96HJ5Xmrs4Rz9sv5P1c';
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.addEventListener('load', () => {
            this.setState({ mapIsReady: true });
        });

        document.body.appendChild(script);
    }

    componentDidUpdate() {
        if (this.state.mapIsReady) {
            // Display the map
            this.map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 30.4548, lng: -97.6223},
                zoom: 13,
                mapTypeId: 'roadmap',
            });
            // You also can add markers on the map below
        }
    }

    render() {
        return (
            <div id="map" />
        );
    }
}

export default GoogleMap;
