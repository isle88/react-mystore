import React from "react";
import { Container, Navbar } from 'react-bootstrap';

function Footer(props) {
  return (
    <div>
      <Navbar className='fixed-bottom'  bg="dark" style={{ maxHeight: '30px' }}>
        <Container>
          <Navbar.Brand href="#home">footer</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
