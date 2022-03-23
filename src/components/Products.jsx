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
    <div>
      {loaded ? (
        <>
          <div className="card-list">
            <Row xs={1} md={2} className="g-4">
              {products.map((product) => {
                return (
                  <Col key={product.id} lg={true}>
                    <div className="products-card">
                      <Link to={`/products/${product.id}`} key={product.id}>
                        <Card style={{ width: 320, height: 220 }}>
                          <Card.Img
                            className="img-fluid"
                            variant="top"
                            src={product.image}
                            style={{
                              objectFit: "contain",
                              display: "inline-block",
                              width: "90%",
                              height: "40%",
                              margin: 15,
                              overflow: "hidden",
                              justifyItem: "center",
                            }}
                          />
                          <Card.Body>
                            <Card.Title style={{ fontSize: 16, color: '#4f4f4d' }}>
                              {product.title}
                            </Card.Title>
                            <Card.Text style={{ fontSize: 15, color: 'black'}}>
                              £{product.price}
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
