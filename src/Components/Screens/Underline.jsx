import React from "react";

const Underline = (props) => {
  return (
    <div
      className={props.className}
      style={{
        height: "4px",
        backgroundColor: "#ffbb00",
        margin: "0 6px",
      }}
    ></div>
  );
};

export default Underline;
