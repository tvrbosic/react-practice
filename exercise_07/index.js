// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// Import application and components
import App from './components/App';
import reducers from './reducers';

// Get root element and create React root
const container = document.getElementById('root');
const root = createRoot(container);

// Hook up Redux-Thunk Middleware to Redux Store
const store = createStore(reducers, applyMiddleware(thunk));

// Render Application inside React root element
root.render(
	// For Redux we have to wrap App with Provider
	<Provider store={store}>
		<App />
	</Provider>
);
