import React, { Component } from 'react';
import Sidebar from './components/Sidebar.jsx';
import GoogleMap from './components/GoogleMap.jsx';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="app-container">
                <header className="header">
                    <h1 className="title">Map of Pflugerville, TX</h1>
                </header>
                <Sidebar />
                <GoogleMap />
            </div>
        );
    }
}

export default App;
