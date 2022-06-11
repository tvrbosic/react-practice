// Import the React and ReactDom Libraries
import React from 'react';
import { createRoot } from 'react-dom/client';

import SeasonDisplay from './components/SeasonDisplay';
import Loader from './components/Loader';

const container = document.getElementById('root');
const root = createRoot(container);

// Create React Component
class App extends React.Component {
  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    console.log('My Component was rendered on screen!');
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  };

  componentDidUpdate() {
    console.log('My Component was just updated!');
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    else if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat}/>;
    }
    else {
      return <Loader message={'Loading location...'}/>
    };
  };

  render() {
    return <div className='border red'>
      {this.renderContent()}
    </div>  
  };
}

// Take the React component and show it on the screen
root.render(<App />);