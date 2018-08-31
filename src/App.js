import React, { Component } from 'react';
import Filter from './components/Filter.jsx';
import './App.css';

class App extends Component {
    state = {
        query: '',
        map: '',
        markers: [],
        infowindow: '',
        contents: [],
        filtered: [],
        hideMarkers: []
    };

    static defaultProps = {
        locations: [
            {name: 'Connally High School', loc: {lat: 30.4192234, lng: -97.6762375}, address: '13212 N Lamar Blvd, Austin, TX 78753', phone: '512-594-0800'},
            {name: 'Pflugerville High School',loc: {lat: 30.4448663, lng: -97.6337909}, address: '1301 W Pecan St, Pflugerville, TX 78660', phone: '512-594-0500'},
            {name: 'Hendrickson High School',loc: {lat: 30.4656629, lng: -97.5878583}, address: '19201 Colorado Sand Dr, Pflugerville, TX 78660', phone: '512-594-1100'},
            {name: 'Weiss High School',loc: {lat: 30.4291442, lng: -97.56574520000001}, address: '5201 Wolf Pack Dr, Pflugerville, TX 78660', phone: '512-594-1400'},
            {name: 'Pflugerville Academic Center of Excellence',loc: {lat: 30.446406, lng: -97.63657909999999}, address: '1401-B W Pecan St, Pflugerville, TX 78660', phone: '512-594-1900'}
        ]
    };

    handleFilter(query) {
        this.setState({ query });
        this.state.markers.map(marker => marker.setVisible(true));

        if (query) {
            const filtered = this.props.locations.filter(location => location.name.toLowerCase().includes(this.state.query.toLowerCase()));
            this.setState({ filtered });

            const hideMarkers = this.state.markers.filter(marker => filtered.every(filteredLocation => filteredLocation.name !== marker.title));
            hideMarkers.forEach(marker => marker.setVisible(false));
            this.setState({ hideMarkers });
        } else {
            this.state.markers.forEach(marker => marker.setVisible(true));
        }
    }

    componentDidMount() {
        const apiKey = 'AIzaSyBuOtZ4Xw9Wo4EK96HJ5Xmrs4Rz9sv5P1c';
        loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`);
        window.initMap = this.initMap.bind(this);
    }

    initMap() {
        const markers = [];
        const contents = [];
        const map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 30.4548, lng: -97.6223},
            zoom: 12,
            mapTypeId: 'roadmap',
            mapTypeControl: false,
            streetViewControl: false
        });
        const infowindow = new window.google.maps.InfoWindow();
        this.props.locations.filter(location => location.name.toLowerCase().includes(this.state.query.toLowerCase())).forEach(location => {
            const contentString = `
                <h2>${location.name}</h2>
                <h3>${location.address}</h3>
                <p><a href="tel:${location.phone}">${location.phone}</a></p>
            `;
            // create a marker for each location
            const marker = new window.google.maps.Marker({
                position: location.loc,
                map: map,
                title: location.name,
                animation: window.google.maps.Animation.DROP
            });
            markers.push(marker);
            contents.push(contentString);
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
        this.setState({ map, markers, infowindow, contents });
    }

    render() {
        const {query, map, markers, contents, infowindow, filtered, hideMarkers} = this.state;
        const {locations} = this.props;
        return (
            <div className="app-container">
                <header className="header">
                    <input type="text" placeholder="Filter items" className="search" onChange={event => this.handleFilter(event.target.value)} value={query}/>
                    <h1 className="title">Map of Pflugerville, TX</h1>
                </header>
                <Filter query={query} locations={locations} map={map} markers={markers} contents={contents} infowindow={infowindow} filtered={filtered} hideMarkers={hideMarkers} />
                <div id="map"></div>
            </div>
        )
    }
}

function loadScript(url) {
    let index = window.document.getElementsByTagName('script')[0];
    let script = window.document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
    script.onerror = function() {
        document.write('Error loading Map. Please try again.')
    };
}

export default App;
