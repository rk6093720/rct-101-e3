  


import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../../context/CartContext";

const Product = ({ id, name, description }) => {
  const {
    getCartItemCountByProductId,
    addItemToCart,
    removeItemFromCart,
    updateItemCount,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await updateItemCount(id, newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await removeItemFromCart(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id, getCartItemCountByProductId]);

  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
      <button data-cy="product-add-item-to-cart-button" onClick={() => {
            addItemToCart({
              productId: id,
              count: 1,
            });
          }}> Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={() => handleUpdate(count + 1)}>+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
          {count}
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={() => handleUpdate(count - 1)}>-</button >
        <button data-cy="product-remove-cart-item-button"  onClick={handleDelete}>Remove</button>
      </div>
    </div>
  );
};

export default Product;