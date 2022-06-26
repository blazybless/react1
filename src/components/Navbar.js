import React from "react"
import logo from "./logo192.png"

export default function Navbar() {
  return (
    <div>
      <nav className="nav">
          <img src={logo} alt="logo" className="nav-logo" />
          <h3>ReactFacts</h3>
          <h4>React Course - Project 1</h4>
      </nav>
    </div>
  )
}