import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="shadow-sm">
      <Container>
        <Navbar.Brand  href="#home">
          {" "}
          <Link className="text-decoration-none" to={"/"}> To-Do App</Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
