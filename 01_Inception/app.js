// nested html structure in js 
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
        "div2", 
        { id: "child2" }, 
        [React.createElement("h1", {id: "heading2" }, "This is nested heading") 
        ,React.createElement("h2", {id: "second_heading2"}, "This is second heading")]    
        )

    ]
   
    );

// adding element using react 

// const heading = React.createElement("h1", { id: "heading" }, "Hello From React !");
const root = ReactDOM.createRoot(document.getElementById("root")); 
root.render(parent);




// this creating nestes structure is very much complicated thats why we have jsx to simplify it


 