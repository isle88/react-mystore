import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      {/* <Navbar fixed="top" /> */}
      <Navbar className='fixed-top' bg="dark" variant="dark" style={{ maxHeight: '45px' }}>
        <Container>
          <Navbar.Brand href="/">MY STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#products">Product</Nav.Link>
            <Nav.Link href="#like">Like</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
