import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GoogleMap from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GoogleMap />, document.getElementById('root'));
registerServiceWorker();
