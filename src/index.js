import React from "react"
import ReactDOM from "react-dom"
import './index.css'

function Header() {
    return (  
      <div>
        <nav className="nav">
          <img src="./logo192.png" className="nav-logo" />
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </div>
    )
  }

function Page() {
  return (
    <div>
      <ol>
        <li>Its awesome</li>
        <li>Its the best language ever</li>
      </ol>
    </div>
  )
}


      
function Title() {
  return (
    <div>
      <h1>Reasons I'm excited to learn React</h1>  
    </div>
  )
}

function Footer() {
  return (
    <div>
      <footer>
        <p>&copy; 2022 BlazyBless development. All rights reserved.</p>
      </footer>
    </div>
  )
}


ReactDOM.render(
  <div>
    <Header />
    <Title />
    <Page />
    <Footer />
  </div>  
  , document.getElementById('root'))