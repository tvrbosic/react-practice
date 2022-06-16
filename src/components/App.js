import { vi } from "faker/lib/locales";
import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSearchSubmit = async (searchText) => {
    const response = await youtube.get("/search", {
      q: searchText,
    });

    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
