import React from "react";
export default props => {
  return (
    <img
      onClick={e => {
        props.handlClick(e);
      }}
      className="thumb"
      src={process.env.PUBLIC_URL + `/img/104x58_${props.imgName}.jpg`}
      alt={props.imgName}
    />
  );
};
