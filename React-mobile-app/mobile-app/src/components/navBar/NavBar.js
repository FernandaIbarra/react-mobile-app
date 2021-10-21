import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Navbar';
import * as Icon from 'react-bootstrap-icons';
import './NavBar.scss'
import {
  Link,
  useRouteMatch
} from "react-router-dom";

function NavBar (props) {
  let { url } = useRouteMatch();
  return( 
      <>
        <Navbar bg="light" variant="light" expand="sm">
            <Container className="container-fluid">
              <Link className="redirect" to={`${url}`}>
                <Navbar.Brand>Home</Navbar.Brand>
              </Link> 
                <Nav className="justify-content-end" >
                  <Nav.Item >
                    <Link className="redirect" to={`${url}profile`}>
                    <Icon.PersonCircle></Icon.PersonCircle>
                    </Link> 
                  </Nav.Item>
                </Nav>
            </Container>
        </Navbar> 
      </>
  )
}

export default NavBar;