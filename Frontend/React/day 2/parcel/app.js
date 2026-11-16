
import React from "react";
import ReactDOM from "react-dom/client";

// First h1 element create kiya
const element = React.createElement("h1", {}, "hello");

// Second h1 element create kiya
const element2 = React.createElement("h1", {}, "world");

// Dono elements ko ek parent div mein rakha
const div1 = React.createElement("div", {}, [element, element2]);

// React root create kiya
const root = ReactDOM.createRoot(document.getElementById("root"));

// DOM mein React element render kiya
root.render(div1);
