// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';

import SearchBar from './components/SearchBar';

const container = document.getElementById('root');
const root = createRoot(container);

// Create React Component
class App extends React.Component {  
    render() {
    return (
        <div className='ui container' style={{ marginTop: '10px' }}>
            <SearchBar />    
        </div>
    );
  };
}

// Take the React component and show it on the screen
root.render(<App />);