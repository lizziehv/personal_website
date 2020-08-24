import React from "react";

const imagesSrc = [
  require("../static/images/drawings/renaissance.jpg"),
  require("../static/images/drawings/mimi-portrait.jpg"),
  require("../static/images/drawings/flowers.jpg"),
  require("../static/images/drawings/arya-portrait.jpg"),
  require("../static/images/drawings/max-portrait.jpg"),
  require("../static/images/drawings/keys.jpg"),
  require("../static/images/drawings/renaissance2.jpg")
];

const Gallery = () => {
  // const [imgIdx, setImgIdx] = useState(0);
  return(
    <div style={{width: "100%"}}>
      <div className="gallery-row">
        {imagesSrc.map((src) => <img src={src} alt=""/>)}
      </div>
    </div>
  );
}

export default Gallery;
