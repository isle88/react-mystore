import React, { useContext, useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import Card from "react-bootstrap/Card";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { LikeContext } from "../contexts/LikeContext";

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
          <div className="cards">
            <Row xs={1} md={2} className="g-4">
              {products.map((product) => {
                return (
                  <Col key={product.id} lg={true}>
                    <div className="products-card">
                      <Link to={`/products/${product.id}`} key={product.id}>
                        <Card style={{ width: 320, height: 260 }}>
                          <Card.Img
                            className="img-fluid"
                            variant="top"
                            src={product.image}
                            alt={product.title}
                            style={{
                              objectFit: "contain",
                              display: "inline-block",
                              marginTop: "5%",
                              overflow: "hidden",
                              alignContent: "center",
                              padding: 10,
                            }}
                          />
                          <Card.Body>
                            <Card.Title
                              style={{ fontSize: 16, color: "#4f4f4d" }}
                            >
                              {product.title}
                            </Card.Title>
                            <Card.Text
                              style={{
                                fontSize: 15,
                                color: "black",
                                margin: 5,
                              }}
                            >
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
