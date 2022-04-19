import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (cart.length) {
      setIsLoaded(true);
    }
  }, [cart.length]);

  function handleRemove() {
    setCart([]);
    setIsLoaded(false);
    sessionStorage.removeItem("cart");
  }

  return (
    <div className="div">
      <>
        {isLoaded ? (
          <>
            <Card>
              <Card.Header>{cart.length} Items in your cart</Card.Header>
              <ListGroup variant="flush">
                {[...cart].map((product, index) => {
                  return (
                    <ListGroup.Item key={index}>
                      <div className="title">{product.title}</div>
                      <div className="price">£ {product.price.toFixed(2)}</div>
                    </ListGroup.Item>
                  );
                })}
                <Button
                  onClick={handleRemove}
                  variant="outline-secondary"
                  className="remove-button"
                >
                  remove all items
                </Button>
              </ListGroup>
            </Card>
            <p>
              TOTAL : £{" "}
              {cart
                .map((product) => {
                  return product.price;
                })
                .reduce((prev, curr) => prev + curr)
                .toFixed(2)}
            </p>
          </>
        ) : (
          <>
            <Card>
              <Card.Header>Your cart is empty</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  please add item first in your cart
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </>
        )}
      </>
    </div>
  );
}

export default Cart;
