import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rootElement = React.createElement("div", null, <App />);
const rootTag = document.getElementById("root");
ReactDOM.render(rootElement, rootTag);
