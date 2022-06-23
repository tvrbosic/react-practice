// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
// Import application
import App from './components/App';

// Get root element and create React root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render Application inside React root element
root.render(<App />);
