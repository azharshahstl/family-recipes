import React from 'react'
import { Nav } from "react-bootstrap";
import '../App.css'

const NavBar = (props) => {

  const myStyle = {
    paddingRight: '20px', 
    color: 'black'
  }

return (
    <div>
      <div className='header'>
        <h1>Family Recipes</h1>
      </div>

  
      <div><Nav className="navbar">
        <Nav.Link href="/" style={myStyle}>Home</Nav.Link>
        <Nav.Link href="/users/new" style={myStyle}>Sign Up</Nav.Link>
        <Nav.Link href="/login" style={myStyle}>Log In</Nav.Link>  
        <Nav.Link href="/logout" style={myStyle}>Log Out</Nav.Link>  
        </Nav>
      </div>
    </div>

  )
}

export default NavBar