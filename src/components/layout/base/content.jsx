import React from "react";

export default function Content(props) {
  return (
    <div className={props.open ? "main main--opened" : "main"}>
      {props.children}
    </div>
  );
}
