import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { LikeContext } from "../contexts/LikeContext";

export const Like = () => {
  const { liked, setLiked } = useContext(LikeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (liked.length) {
      setIsLoaded(true);
    }
  }, [liked.length]);

  function handleRemove() {
    setLiked([]);
    setIsLoaded(false);
    sessionStorage.removeItem("liked");
  }

  return (
    <>
      {isLoaded ? (
        <>
          <Card>
            <Card.Header>You liked {liked.length} items</Card.Header>
            <ListGroup variant="flush">
              {[...liked].map((product) => {
                return (
                  <ListGroup.Item key={product.id}>
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
        </>
      ) : (
        <>
          <Card>
            <Card.Header>You liked 0 item</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>please add item you liked first</ListGroup.Item>
            </ListGroup>
          </Card>
        </>
      )}
    </>
  );
};
