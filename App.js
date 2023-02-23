import React from "react";
import ReactDOM from "react-dom/client";

const Heading = React.createElement(
  "h1",
  { id: "title", key: "h1" },

  "Heading 1"
);
const Heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },

  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  Heading,
  Heading2,
]);
console.log(Heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
