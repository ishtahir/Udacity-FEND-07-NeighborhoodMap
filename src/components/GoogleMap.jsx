import React, { Component } from 'react';

class GoogleMap extends Component {
    state = {
        mapIsReady: false
    };

    static defaultProps = {
        locations: [
            {name: 'Connally High School', loc: {lat: 30.4192234, lng: -97.6762375}, address: '13212 N Lamar Blvd, Austin, TX 78753'},
            {name: 'Pflugerville High School',loc: {lat: 30.4448663, lng: -97.6337909}, address: '1301 W Pecan St, Pflugerville, TX 78660'},
            {name: 'Hendrickson High School',loc: {lat: 30.4656629, lng: -97.5878583}, address: '19201 Colorado Sand Dr, Pflugerville, TX 78660'},
            {name: 'Weiss High School',loc: {lat: 30.4291442, lng: -97.56574520000001}, address: '5201 Wolf Pack Dr, Pflugerville, TX 78660'},
            {name: 'Pflugerville Academic Center of Excellence (PACE)',loc: {lat: 30.446406, lng: -97.63657909999999}, address: '1401-B W Pecan St, Pflugerville, TX 78660'}
        ]
    }

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
            // display the map
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 30.4548, lng: -97.6223},
                zoom: 13,
                mapTypeId: 'roadmap',
            });
            // create info window for each location
            const infowindow = new window.google.maps.InfoWindow();
            // map over the locations array to create a marker and info window for each location
            this.props.locations.forEach(location => {
                const contentString = `
                    <h2>${location.name}</h2><h3>${location.address}</h3>
                `;
                // create a marker for each location
                const marker = new window.google.maps.Marker({
                    position: location.loc,
                    map: map,
                    title: location.name
                });
                // set the info window content to location info and open on marker click
                marker.addListener('click', function() {
                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);
                });
            });
        }
    }

    render() {
        return (
            <div id="map" />
        );
    }
}

export default GoogleMap;
