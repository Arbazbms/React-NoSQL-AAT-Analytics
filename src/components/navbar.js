import React from 'react'
import {Navbar, Nav, Container,} from "react-bootstrap";
import {Link} from 'react-router-dom'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';


export default function Navb() {
    return (
        <div>
            <Navbar className = "fixed-top relative" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">Heart Disease Analysis</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link className="navItem"><Link to="/crud">CRUD Opertaions</Link></Nav.Link>
                    <Nav.Link className="navItem"><Link to="/createDoc">Add a Record</Link></Nav.Link>
                    <Nav.Link classname="navItem"><Link to="/analytics">Analytics</Link></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
