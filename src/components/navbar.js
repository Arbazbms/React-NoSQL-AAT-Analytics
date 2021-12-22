import React from 'react'
import {Navbar, Nav, NavDropdown,Container,} from "react-bootstrap";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import App from '../App';
import Analytics from './analytics';


export default function Navb() {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">

                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
