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
    // eslint-disable-next-line
  }, [setCart, setLiked]);

  return (
    <div>
      <Navbar
        className="fixed-top nav-var"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">MY STORE</Navbar.Brand>
          <span className="menus">
            <Nav className="me-auto">
              <Nav.Link href="/like" className='nav-link'>
                <i className="bi bi-heart"></i> LIKE
                <span className="badge">
                  {liked.length > 0 && (
                    <Badge pill bg="light" text="dark">
                      {liked.length}
                    </Badge>
                  )}
                </span>
              </Nav.Link>
              <Nav.Link href="/cart" className='nav-link'>
                <i className="bi bi-cart-plus"></i> CART
                <span className="badge">
                  {cart.length > 0 && (
                    <Badge pill bg="light" text="dark">
                      {storedCart.length}
                    </Badge>
                  )}
                </span>
              </Nav.Link>
            </Nav>
          </span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
