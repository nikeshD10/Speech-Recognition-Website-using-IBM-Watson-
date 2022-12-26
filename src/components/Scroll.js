import React from "react";

export default function Scroll(props) {
  return (
    <div
      className="scrollComponent"
      style={{
        overflowY: "auto",
        border: "2px solid black",
        height: "600px",
        margin: "20px",
        borderRadius: "31px",
        background: "linear-gradient(225deg, #e6e6e6, #ffffff)",
        boxShadow: "-35px 35px 70px #a8a8a8, 35px -35px 70px #ffffff",
      }}
    >
      {props.children}
    </div>
  );
}
