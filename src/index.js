import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter } from 'react-router-dom'

require('./sass/app.scss');

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
