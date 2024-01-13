import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="head">Using JSX</h1>; 

// React Component - Every thing is a component (button, list etc.)
// Class Based Component
// Functional Component  
const ReactElement = <h2>Now I am putting my React Element inside a component</h2>; 
const TitleComponent = ()=>{
    return <h1>This is a title component</h1>
};
const HeadingComponent = ()=>{
    return (<div>
        {ReactElement}
        
    <h2>{100+200}</h2>
    <TitleComponent />
    <h1>Test</h1>
    </div>)
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);



