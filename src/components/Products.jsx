import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import Card from "react-bootstrap/Card";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .then(() => {
        setLoaded(true);
      });
  }, [setProducts, setLoaded]);

  return (
    <div className="div">
      {loaded ? (
        <>
          <div>
            <Row xs={1} md={2} className="g-4">
              {products.map((product) => {
                return (
                  <Col key={product.id} lg={true}>
                    <div className="products-card">
                      <Link to={`/products/${product.id}`} key={product.id}>
                        <Card className="card-size">
                          <Card.Img
                            className="img-fluid products-card-image"
                            variant="top"
                            src={product.image}
                            alt={product.title}
                          />
                          <Card.Body>
                            <Card.Title className="products-card-title">
                              {product.title}
                            </Card.Title>
                            <Card.Text className="card-price">
                              £{product.price.toFixed(2)}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      ) : (
        <>
          <Spinner animation="grow" />
        </>
      )}
    </div>
  );
};

export default Products;
