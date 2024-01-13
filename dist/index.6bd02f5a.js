/*const heading = React.createElement(
    "h1",
    {id: "heading"},
    "Hello world from React");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/ /*
<div id = "parent">
<div id = "children">
<h1> I am a h1 tag </h1>
</div>
</div>
*/ const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "I am a h1 tag"),
    React.createElement("h2", {}, "I am a h2 tag")
]));
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
