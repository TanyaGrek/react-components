import React from "react";

export const Button = ({ handleClick, title }) => (
  <button onClick={handleClick}>{title}</button>
);
