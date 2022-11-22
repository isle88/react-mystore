import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { Button, Card, Spinner } from "react-bootstrap";
import { LikeContext } from "../contexts/LikeContext";
import { CartContext } from "../contexts/CartContext";

export const Product = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { liked, setLiked } = useContext(LikeContext);
  const { cart, setCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      const data = await fetchProduct(id);
      setProduct(data);
      setLoaded(true);
    }
    getProduct();
  }, [id, setProduct, setLoaded]);

  function handleLike() {
    const likeId = liked.map((item) => item.id).toString();
    const productId = product.id.toString();

    if (!liked.length || likeId === productId) {
      setLiked([product]);
    } else if (!likeId.includes(productId)) {
      setLiked((current) => [...current, product]);
    }
    sessionStorage.setItem("liked", JSON.stringify(liked));
  }

  function handleCart() {
    setCart((current) => [...current, product]);
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <>
      {loaded ? (
        <div className="main">
          <Card className="text-center" key={product.id}>
            <Card.Header>{product.category}</Card.Header>
            <Card.Body className="card-padding">
              <Card.Title>{product.title}</Card.Title>
              <Card.Img
                className="img-fluid card-image"
                variant="top"
                src={product.image}
                alt={product.title}
              />
              <Card.Text className="card-description">
                {product.description}
              </Card.Text>
              <Card.Text className="card-price">
                £{product.price.toFixed(2)}
              </Card.Text>
              <Card.Text className="card-rate-count">
                {product.rating.rate} <i className="bi bi-star-fill"></i> / by{" "}
                {product.rating.count} customers
              </Card.Text>
              <Button
                onClick={handleLike}
                variant="outline-secondary"
                className="card-button"
              >
                Like <i className="bi bi-heart"></i>
              </Button>
              <Button
                onClick={handleCart}
                variant="outline-secondary"
                className="card-button"
              >
                Cart <i className="bi bi-cart-plus"></i>
              </Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <>
          <Spinner animation="grow" />
        </>
      )}
    </>
  );
};
