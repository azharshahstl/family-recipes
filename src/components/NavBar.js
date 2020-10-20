import React from 'react'
import { Nav, Navbar } from "react-bootstrap";

const NavBar = (props) => {

return (
    <div>
      <div className='header'>
        Family Recipes
      </div>

  
      <div><Nav className="navbar">
        <Nav.Link href="/" style={{paddingRight: '20px'}}>Home</Nav.Link>
        <Nav.Link href="/users/new" style={{paddingRight: '20px'}}>Sign Up</Nav.Link>
        <Nav.Link href="/login" style={{paddingRight: '20px'}}>Log In</Nav.Link>  
        <Nav.Link href="/logout" style={{paddingRight: '20px'}}>Log Out</Nav.Link>  
        </Nav>
      </div>
    </div>

  )
}

export default NavBar