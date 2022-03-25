import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../utils/api";
import { Button, Card, Spinner } from "react-bootstrap";
import { LikeContext } from "../contexts/LikeContext";
import { CartContext } from "../contexts/CartContext";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { liked, setLiked, storedLike } = useContext(LikeContext);
  const { cart, setCart, storedCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct(id)
      .then((data) => {
        setProduct(data);
      })
      .then(() => {
        setLoaded(true);
      });
  }, [id, setProduct, setLoaded]);

  function handleLike() {
    const likeId = liked.map((item) => item.id).toString();
    const productId = product.id.toString();

    if (liked === [] || likeId === productId) {
      setLiked([product]);
      sessionStorage.setItem("liked", JSON.stringify(liked));
    } else if (likeId !== productId) {
      setLiked((current) => [...current, product]);
      sessionStorage.setItem("liked", JSON.stringify(liked));
    }
  }

  // console.log(JSON.parse(sessionStorage.getItem("like")), 'liked')
  console.log(JSON.parse(sessionStorage.getItem("cart")), 'cart')

  function handleCart() {
    if (cart === []) {
      setCart([product]);
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart((current) => [...current, product])
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div className="div product-card">
      {loaded ? (
        <>
          <Card className="text-center" key={product.id}>
            <Card.Header>{product.category}</Card.Header>
            <Card.Body style={{ padding: "5%" }}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Img
                className="img-fluid"
                variant="top"
                src={product.image}
                alt={product.title}
                style={{
                  objectFit: "contain",
                  display: "inline-block",
                  width: "30%",
                  margin: 15,
                }}
              />
              <Card.Text style={{ fontSize: 17 }}>
                {product.description}
              </Card.Text>
              <Card.Text style={{ fontSize: 17 }}>£{product.price}</Card.Text>
              <Card.Text style={{ fontSize: 15 }}>
                {product.rating.rate} <i className="bi bi-star-fill"></i> / by{" "}
                {product.rating.count} customers
              </Card.Text>
              <Button
                onClick={handleLike}
                variant="outline-secondary"
                style={{ margin: 5 }}
              >
                Like <i className="bi bi-heart"></i>
              </Button>
              <Button
                onClick={handleCart}
                variant="outline-secondary"
                style={{ margin: 5 }}
              >
                Cart <i className="bi bi-cart-plus"></i>
              </Button>
            </Card.Body>
          </Card>
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
