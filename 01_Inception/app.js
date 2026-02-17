import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


const parent = React.createElement(
    "div", 
    { id: "parent" },
    [ React.createElement(
        "div", 
        { id: "child" }, 
        [React.createElement("h1", {id: "heading" }, "This is nested heading") 
        ,React.createElement("h2", {id: "second_heading"}, "This is second heading")]    
        ),
         React.createElement(
        "div", 
        { id: "child2" }, 
        [React.createElement("h1", {id: "heading2" }, "This is nested heading") 
        ,React.createElement("h2", {id: "second_heading2"}, "This is second heading")]    
        )

    ]
   
    );


const root = createRoot(document.getElementById("root"));
root.render(parent);





 