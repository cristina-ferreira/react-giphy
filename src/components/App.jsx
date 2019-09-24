import React, { Component } from 'react';
import SelectedGif from './SelectedGif';
import GifList from './GifList';
import Search from './Search';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedGif: "https://media.giphy.com/media/l0MYyBBqea2iu57J6/giphy.gif",
            gifs: []
        };
    }

  onClickGif = (clickedGif) => {
      this.setState((state) => {
          return { selectedGif: clickedGif };
      });
  }

  onSubmitSearch = (newSearch) => {
      const searchUrl = `http://api.giphy.com/v1/gifs/search?q=${newSearch}&api_key=CcXEk6bns1lYsCQZC6xD4XzQXbdGXXOS&limit=5`;
      fetch(searchUrl)
          .then(response => response.json())
          .then((data) => {
              this.setState({ gifs: data.data });
          });
  };

  render() {
      const { search } = this.state;
      const { selectedGif, gifs } = this.state;
      return (
          <div className="container">
              <div className="row">
                  <div className="col search">
                      <Search search={search} handleSubmitSearch={this.onSubmitSearch} />
                      <SelectedGif selectedGif={selectedGif} />
                  </div>
                  <div className="col">
                      <GifList gifs={gifs} handleClickGif={this.onClickGif} />
                  </div>
              </div>
          </div>
      );
  }
}
export default App;
