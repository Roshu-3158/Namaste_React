import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

// jsx (transpiled before it reaches the js ) -  Parcel -  babel
// jsx => babel transpiles it to React.createElement => Reactelement => js-Object => HtmlElement(render)

// react Element
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is react element",
);

// jsx
const jsxheading = <h1>Namste react using jsx </h1>;

const Title = () => (
  <h1 className="head" tabIndex="5">
    Namste react using jsx
  </h1>
);

// Component Composition 
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h1 className="heading">Namste react functional component</h1> 
  </div>
);

// const HeadingComponet2 = () => <h1>Namste react functional component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxheading);

root.render(<HeadingComponent/>);
