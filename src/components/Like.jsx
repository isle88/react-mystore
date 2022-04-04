import React, { useContext, useEffect, useState } from "react";
import { Button, Card, ListGroup } from "react-bootstrap";
import { LikeContext } from "../contexts/LikeContext";

const Like = () => {
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
    <div className="div">
      <>
        {isLoaded ? (
          <>
            <Card>
              <Card.Header>You liked {liked.length} items</Card.Header>
              <ListGroup variant="flush">
                {[...liked].map((product) => {
                  return (
                    <ListGroup.Item key={product.id} style={{ fontSize: 18 }}>
                     <p style={{fontSize: 16}}> {product.title}</p>
                      £ {product.price.toFixed(2)}
                    </ListGroup.Item>
                  );
                })}
                <Button
                  onClick={handleRemove}
                  variant="outline-secondary"
                  style={{
                    width: "60%",
                    marginLeft: "20%",
                    marginTop: 5,
                    marginBottom: 5,
                  }}
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
    </div>
  );
};

export default Like;
