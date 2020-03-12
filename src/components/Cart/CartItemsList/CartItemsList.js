import React from "react";
import PropTypes from "prop-types";
import { CartItem } from "./CartItem";
import { BookListType } from "../../../types";

export const CartItemsList = ({ items, onRemoveItem }) => (
  <table className='table is-fullwidth is-hoverable cart_price'>
    <thead>
      <tr>
        <th>Item name</th>
        <th>Price</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <CartItem key={item.isbn} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </tbody>
  </table>
);

CartItemsList.propTypes = {
  items: BookListType.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};
