import React, { useContext, useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { LikeContext } from "../contexts/LikeContext";

const Like = () => {
  const { liked, setLiked } = useContext(LikeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (liked.length) {
      setIsLoaded(true);
    }
  },[liked.length]);

  return (
    <div className="div">
      <>
        {isLoaded ? (
          <>
            <Card>
              <Card.Header>Items you liked</Card.Header>
              <ListGroup variant="flush">
                {[...liked].map((product) => {
                  return (
                    <ListGroup.Item>
                      {product.title}
                      <br />£ {product.price}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card>
          </>
        ) : (
          <>
            <Card>
              <Card.Header>Items you liked</Card.Header>
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
