
const navBar = (
  <nav>
    <h1>Hocus Pocus</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <h3>Friday Grand Openning</h3>
    <h4>Kids eat for free</h4>
  </nav>
)

//ReactDOM.createRoot(document.getElementById('root')).render(navBar)
document.getElementById('root').append(JSON.stringify(navBar));

//.append returns JSX objects
//Use JSON.stringify() to see the objects