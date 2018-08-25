import React, { Component } from 'react';
import Sidebar from './components/Sidebar.jsx';
import './App.css';

class App extends Component {
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
            // this.setState({ mapIsReady: true });
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
        const style = {
            height: '90vh',
            width: '70%',
            display: 'flex',
            float: 'right'
        }
        return (
            <div className="app-container">
                <header className="header">
                    <h1 className="title">Map of Pflugerville, TX</h1>
                </header>
                <Sidebar />
            </div>
        );
    }
}

export default App;
