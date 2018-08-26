import React, { Component } from 'react';

class GoogleMap extends Component {
    state = {
        mapIsReady: false,
        locations: [
            {name: 'Connally High School', loc: {lat: 30.4192234, lng: -97.6762375}},
            {name: 'Pflugerville High School',loc: {lat: 30.4448663, lng: -97.6337909}},
            {name: 'Hendrickson High School',loc: {lat: 30.4656629, lng: -97.5878583}},
            {name: 'Weiss High School',loc: {lat: 30.4291442, lng: -97.56574520000001}},
            {name: 'Pflugerville Academic Center of Excellence',loc: {lat: 30.446406, lng: -97.63657909999999}}
        ]
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
            this.state.locations.map(location => {
                this.generateMarkers(location.loc, this.map, location.name)
            });
        }
    }

    generateMarkers(pos, map, title) {
        const marker = new window.google.maps.Marker({
            position: pos,
            map: map,
            title: title
        });
    }

    render() {
        return (
            <div id="map" />
        );
    }
}

export default GoogleMap;
