import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { Button, Card, Spinner } from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [liked, setLiked] = useState([]);
  const [cart, setCart] = useState([])
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
    <div className="div product-card">
      {loaded ? (
        <>
          {product.map((item) => {
            return (
              <Card className="text-center" key={item.id}>
                <Card.Header>{item.category}</Card.Header>
                <Card.Body style={{padding: '5%'}}>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Img
                    className="img-fluid"
                    variant="top"
                    src={item.image}
                    style={{
                      objectFit: "contain",
                      display: "inline-block",
                      width: "30%",
                      margin: 15,
                    }}
                  />
                  <Card.Text style={{ fontSize: 17 }}>{item.description}</Card.Text>
                  <Card.Text style={{ fontSize: 17 }}>£{item.price}</Card.Text>
                  <Card.Text style={{ fontSize: 15 }}>
                    {item.rating.rate} <i className="bi bi-star-fill"></i> / by{" "}
                    {item.rating.count} customers
                  </Card.Text>
                  <Button variant="outline-secondary" style={{margin: 5}}>Like <i className="bi bi-heart"></i></Button>
                  <Button variant="outline-secondary" style={{margin: 5}}>Cart <i className="bi bi-cart-plus"></i></Button>
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
