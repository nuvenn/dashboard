import React from "react";

export default function Container(props) {
  return (
    <>
      <div className="main">{props.children}</div>
    </>
  );
}
