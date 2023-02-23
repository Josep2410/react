//What should be done?
//"just tell me what to do , and i'll worry about how I get it done"
ReactDOM.render(<h1 className="header">Declarative coding</h1>,document.querySelector("#root"))

//How should it be done?
//"Describe to me every step on how to do something, and I'll do it"
let h1 = document.createElement("h1");
const root = document.querySelector("#root")
h1.textContent = 'imperative coding';
h1.className = 'header'
root.append(h1);
