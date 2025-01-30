import React from "react";
import ReactDom from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading", className: "attributeToH1Tag" },
  "Namaste From React app build through CDN Links!"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    heading,
    React.createElement(
      "h2",
      {},
      "This are the Nested React Code through javascript & I'm a sibling of h1"
    ),
    React.createElement(
      "h3",
      {},
      "Im a h3 Tag & I'm a sibling of both h1 & h2 tag"
    ),
  ]),
  React.createElement("div", { id: "child2" }, [
    heading,
    React.createElement(
      "h2",
      {},
      "This are the Nested React Code through javascript & I'm a sibling of h1"
    ),
    React.createElement(
      "h3",
      {},
      "Im a h3 Tag & I'm a sibling of both h1 & h2 tag"
    ),
  ]),
]);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);
