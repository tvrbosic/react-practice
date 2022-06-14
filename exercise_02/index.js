// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';
import unsplash from './api/unsplash';

import SearchBar from './components/SearchBar';
import ImageList from './components/imageList';

const container = document.getElementById('root');
const root = createRoot(container);

// Create React Component
class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (text) => {
        const response = await unsplash
            .get('/search/photos', {
                params: { query: text }
        });

        this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className='ui container' style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
  };
}

// Take the React component and show it on the screen
root.render(<App />);