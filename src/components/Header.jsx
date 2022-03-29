import React, { useContext, useEffect } from "react";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { LikeContext } from "../contexts/LikeContext";

const Header = () => {
  const { liked, setLiked } = useContext(LikeContext);
  const { cart, setCart } = useContext(CartContext);

  const storedLike = JSON.parse(sessionStorage.getItem("liked"));
  const storedCart = JSON.parse(sessionStorage.getItem("cart"));

  useEffect(() => {
    if (storedLike !== null) setLiked(storedLike);
    if (storedCart !== null) setCart(storedCart);
  }, [setCart, setLiked]);
    
  return (
    <div>
      {/* <Navbar fixed="top" /> */}
      <Navbar
        className="fixed-top"
        bg="dark"
        variant="dark"
        style={{ maxHeight: "45px" }}
      >
        <Container>
          <Navbar.Brand href="/">MY STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/like">
              Like{" "}
              {liked.length > 0 && (
                <Badge pill bg="light" text="dark">
                  {" "}
                  {liked.length}
                </Badge>
              )}{" "}
            </Nav.Link>
            <Nav.Link href="#cart">
              Cart{" "}
              {cart.length > 0 && (
                <Badge pill bg="light" text="dark">
                  {" "}
                  {storedCart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
