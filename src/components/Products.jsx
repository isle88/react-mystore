import React, { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import Card from "react-bootstrap/Card";
import { Button, Col, Row } from "react-bootstrap";

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
  }, [setProducts]);

  return (
    <div>
      {loaded ? (
        <>
          <div className='card-list'>
            <Row xs={1} md={2} className="g-4">
              {products.map((product) => {
                return (
                  <Col key={product.id} lg={true}>
                    <div className="products-card">
                      <Card style={{ width: 300, height: 220}}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          style={{
                            objectFit: "contain",
                            display: "inline-block",
                            width: '90%',
                            height: "40%",
                            margin: 15,
                            overflow: "hidden",
                            justifyItem: "center",
                          }}
                        />
                        <Card.Body>
                          <Card.Title style={{ fontSize: 16}}>
                            {product.title}
                          </Card.Title>
                          <Card.Text style={{ fontSize: 12 }}>
                            £{product.price}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </div>
        </>
      ) : (
        <>
          <p>is Loading</p>
        </>
      )}
    </div>
  );
};

export default Products;
