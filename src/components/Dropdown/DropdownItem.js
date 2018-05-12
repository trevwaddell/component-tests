import React from "react";

export default ({ googleTag, selected, display, value, handleClick }) => (
  <div onClick={handleClick}>{display}</div>
);
