import React from "react";
import { Navbar } from 'react-bootstrap';

function Footer(props) {
  return (
    <div>
      <Navbar className='fixed-bottom' style={{ maxHeight: '30px', backgroundColor:'white'}}>
      </Navbar>
    </div>
  );
}

export default Footer;
