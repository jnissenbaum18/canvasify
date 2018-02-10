import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let middleware = [ thunk, logger ];



ReactDOM.render(
	<App />, 

	document.getElementById('root')
);

registerServiceWorker();
