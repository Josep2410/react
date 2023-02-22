function Element(){
  return (<p>Hello From the other side</p>)
}
function SayHB(){
  return <h1>Happy Birthday</h1>
}
ReactDOM.render(
 <div>
   <Element />
   <SayHB />
 </div>,
  document.querySelector("#root"))