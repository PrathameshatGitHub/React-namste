const heading = React.createElement("h1", { id: "same ", xyc: "poer" }, "This is the first React element");
ReactDOM.render(heading, document.getElementById("root"));


const newheader=React.createElement("div",{id:"newheaer",class:"Name"},

[React.createElement("div",{},[React.createElement("h1",{id:"newheaer",class:"Name"},"this is first heading"),React.createElement("h1",{id:"newheaer",class:"Name"},"this is secobd heading")]),React.createElement("div",{},[React.createElement("h1",{id:"newheaer",class:"Name"},"this is third heading"),React.createElement("h1",{id:"newheaer",class:"Name"},"this is fourth heading")])]
)
ReactDOM.render(newheader,document.getElementById("root"));