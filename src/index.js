//react imports
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

//files
import './index.css';
// import App from './App';
import reducer from './reducers/index'
import Game from './containers/Game'

//redux imports
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(reducer);


ReactDOM.render(
	<Provider store={store}>
		<Game />
	</Provider>
	, 
	document.getElementById('root')
);
registerServiceWorker();
