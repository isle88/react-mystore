import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { Button, Card, Spinner } from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id)
      .then((data) => {
        setProduct([data]);
      })
      .then(() => {
        setLoaded(true);
      });
  }, [id, setProduct, setLoaded]);

  return (
    <div className="product-card">
      {loaded ? (
        <>
          {product.map((item) => {
            return (
              <Card className="text-center" key={item.id}>
                <Card.Header>{item.category}</Card.Header>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={item.image}
                    style={{
                      objectFit: "contain",
                      display: "inline-block",
                      width: "50%",
                      height: "40%",
                      margin: 15,
                    }}
                  />
                  <Card.Text style={{ fontSize: 17 }}>{item.description}</Card.Text>
                  <Card.Text style={{ fontSize: 17 }}>£{item.price}</Card.Text>
                  <Card.Text style={{ fontSize: 15 }}>
                    {item.rating.rate} <i className="bi bi-star-fill"></i> / by{" "}
                    {item.rating.count} customers
                  </Card.Text>
                  <Button variant="outline-secondary">Add to Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </>
      ) : (
        <>
          <Spinner animation="grow" />
        </>
      )}
    </div>
  );
};

export default Product;
