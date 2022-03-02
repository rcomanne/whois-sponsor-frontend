import React from "react";
import {Nav, Navbar} from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="light">
            <Navbar.Brand href="/" className="m-2">Who is that sponsor?</Navbar.Brand>
            <Nav className="m-2">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/organizations">Organizations</Nav.Link>
                <Nav.Link href="/sponsors">Sponsors</Nav.Link>
                <Nav.Link href="/sports">Sports</Nav.Link>
                <Nav.Link href="/athletes">Athletes</Nav.Link>
            </Nav>
        </Navbar>
    )
}

