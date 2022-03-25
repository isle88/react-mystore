import React, { useContext, useState } from "react";
import { CartContext } from '../contexts/CartContext';
import { LikeContext } from '../contexts/LikeContext';

const Like = () => {
  const { liked, setLiked } = useContext(LikeContext);
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="div">
      <p>Like page</p>
    </div>
  );
};

export default Like;
