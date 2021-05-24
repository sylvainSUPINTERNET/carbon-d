import React from "react";
import {Navbar, Nav} from 'react-bootstrap'
import { Router, Link } from "@reach/router";

export const Menu = () => {
    return (
        <div>
              <Navbar bg="light">
                <Navbar.Brand href="/">
                    LOGO
                </Navbar.Brand>
                <Nav.Item>
                    <Nav.Link href="/">
                        <Link to="/">Home</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        <Link to="/profile">Profile</Link>
                    </Nav.Link>
                </Nav.Item>
            </Navbar>
        </div>
    )
}