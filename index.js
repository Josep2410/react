
const navBar = (
  <nav>
    <h1>Hocus Pocus</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
)

//React 17
//ReactDOM.render(navBar,document.getElementById('root'))
//render(what do i want to render, where to render it)

//React 18 
//ReactDOM.createRoot(document.getElementById('root')).render(navBar);

//OR

const root = ReactDOM.createRoot(document.getElementById('root'))
.render(navBar);