
import React, { Component } from 'react';
import './App.css';


// import API
// import axios from './YoutubeAPI/YoutubeAPI';
import YoutubeAPI from './YoutubeAPI/YoutubeAPI';

//import component
import SearchBar from './Components/SearchBar';
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  }

  onTermSubmit = async (term) => {
    const response = await YoutubeAPI.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })

  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount() {
    this.onTermSubmit('stephan graham')
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail VideoDetail={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
