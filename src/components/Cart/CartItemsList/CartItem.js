import React from "react";
import PropTypes from "prop-types";
import { BookType } from "../../../types";
import { priceFormatter } from "../../../helpers";

export const CartItem = ({ item, onRemoveItem }) => {
  const { title, price, isbn } = item;

  return (
    <tr className='cart_price-row'>
      <td>{title}</td>
      <td>{priceFormatter(price)}</td>
      <td>
        <button className='button is-danger is-inverted' onClick={() => onRemoveItem(item, isbn)}>
          <span className='icon'>
            <i className='fas fa-trash'></i>
          </span>
        </button>
      </td>
    </tr>
  );
};

CartItem.propTypes = {
  item: BookType.isRequired,
  onRemoveItem: PropTypes.func.isRequired
};
