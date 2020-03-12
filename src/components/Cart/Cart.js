import React from "react";
import { EmptyCart } from "./EmptyCart";
import { CartItemsList } from "./CartItemsList";
import { priceFormatter } from "../../helpers";

export const Cart = ({ cartItems, onRemoveItem }) => {
  const calculateDiscount = cartItems => {
    const discountedItemsLength = cartItems.filter(item => item.specialOffer === true).length;
    const discountedItems = cartItems.filter(item => item.specialOffer === true);
    if (discountedItemsLength >= 3) {
      return Math.min.apply(
        null,
        discountedItems.map(item => item.price)
      );
    }
    return 0;
  };
  const subTotal = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const discout = calculateDiscount(cartItems);
  const total = (subTotal - discout).toFixed(2);

  return (
    <div className='tile is-parent'>
      <div className='tile is-child box'>
        <h4 className='title is-4'>Your cart</h4>
        <hr />
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <CartItemsList items={cartItems} onRemoveItem={onRemoveItem} />
        )}
        <div className='columns'>
          <div className='column'>Subtotal:</div>
          <div className='column has-text-right is-size-6'>{priceFormatter(subTotal)}</div>
        </div>
        <div className='columns'>
          <div className='column'>Discount:</div>
          <div className='column has-text-right is-size-6'>{priceFormatter(discout)}</div>
        </div>
        <div className='columns'>
          <div className='column'>Total:</div>
          <div className='column  has-text-right is-size-4'>
            <strong>{priceFormatter(total)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
