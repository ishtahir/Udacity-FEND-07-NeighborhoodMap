import React, { Component } from 'react';

class GoogleMap extends Component {
    state = {
        mapIsReady: false
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
            // display the map
            const map = new window.google.maps.Map(document.getElementById('map'), {
                center: {lat: 30.4548, lng: -97.6223},
                zoom: 13,
                mapTypeId: 'roadmap',
                mapTypeControl: false,
                streetViewControl: false
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

                map.addListener('click', function() {
                    if (infowindow) {
                        infowindow.close();
                    }
                })
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
