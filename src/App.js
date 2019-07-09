import React from "react";
import "./App.css";
import imgs from "./imgs";
import Thumb from "./Thumb";

class App extends React.Component {
  state = {
    imgs: imgs,
    preview: imgs[0]
  };

  handlClick = e => {
    this.setState({ preview: e.target.alt });
  };

  render() {
    const thumbs = [];
    this.state.imgs.forEach((img, index) => {
      thumbs.push(
        <Thumb handlClick={this.handlClick} key={index} imgName={img} />
      );
    });

    const imgPath = `/img/360x202_${this.state.preview}.jpg`;
    const url = "url(" + imgPath + ")";

    return (
      <div className="App">
        <h1>Colocation</h1>
        <h2>Playlist</h2>
        <iframe
          title="videos"
          src="https://www.youtube.com/embed/videoseries?list=PLo2PSuBYZiOp-ZYVeHlXhg-eWEoZUz6Re"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
        <h2>Gallery</h2>
        <div
          className="preview"
          style={{
            backgroundImage: url
          }}
        />
        <div className="thumbs">{thumbs}</div>
      </div>
    );
  }
}

export default App;
// github
// mise en ligne
