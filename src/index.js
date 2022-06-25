// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
// Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// Import application and components
import App from './components/App';
import reducers from './reducers';

// Get root element and create React root
const container = document.getElementById('root');
const root = createRoot(container);

// Render Application inside React root element
root.render(
	// For Redux we have to wrap App with Provider
	<Provider store={createStore(reducers)}>
		<App />
	</Provider>
);
