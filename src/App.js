import React from "react";
import "./App.css";

function handlClick(e) {
  console.log(e.target.alt);

  // preview: "190704-IMG_20190704_170811"

  // this.setState = {
  //   imgs: [
  //     "190704-IMG_20190704_170811",
  //     "190704-IMG_20190704_170821",
  //     "190704-IMG_20190704_170904"
  //   ],
  // }
}

const Thumb = props => {
  return (
    <img
      // onClick={handlClick(e)}
      onClick={e => {
        handlClick(e);
      }}
      className="thumb"
      src={process.env.PUBLIC_URL + `/img/104x58_${props.imgName}.jpg`}
      alt={props.imgName}
    />
  );
};

class App extends React.Component {
  imgs = [
    "190704-IMG_20190704_170811",
    "190704-IMG_20190704_170821",
    "190704-IMG_20190704_170904"
  ];
  state = {
    imgs: this.imgs,
    preview: this.imgs[0]
  };
  render() {
    const thumbs = [];

    this.state.imgs.forEach((img, index) => {
      thumbs.push(<Thumb key={index} imgName={img} />);
    });

    const imgPath = `/img/360x202_${this.state.preview}.jpg`;
    const url = "url(" + imgPath + ")";

    return (
      <div className="App">
        <h1>Vidéos et images de la colocation</h1>
        <h2>Playlist</h2>
        <iframe
          title="videos"
          width="320"
          height="180"
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

// au click affiche l'image dans preview

// ajouter une croix qui display none la preview
// changer css preview pour faire une pop up
