import React from "react";
import PropTypes from "prop-types";
import { BookType } from "../../types";

const defaultImage = "https://picsum.photos/128";

export const BookListItem = ({ item, inCart, onAddItemToCart }) => {
  const { title, thumbnailUrl, isbn, shortDescription, price, specialOffer } = item;
  return (
    <article className='media'>
      <div className='media-left'>
        <figure className='image is-128x128 is-4by5'>
          <img src={thumbnailUrl ? thumbnailUrl : defaultImage} alt={`cover of ${title}`} />
        </figure>
      </div>
      <div className='media-content'>
        <div className='content'>
          <div>
            <strong>{title}</strong>{" "}
            <small className='has-text-grey-light'>{`ISBN: ${isbn}`}</small>
            {specialOffer && <span className='tag is-info book_special-offert'>3 for 2</span>}
          </div>
          <p className='book_description'>{shortDescription}</p>
        </div>
        <button
          className='button is-primary'
          onClick={() => onAddItemToCart(item, isbn)}
          disabled={inCart}>
          <span className='icon'>
            <i className='fas fa-cart-plus'></i>
          </span>
          <span>{`$${price}`}</span>
        </button>
      </div>
    </article>
  );
};

BookListItem.propTypes = {
  item: BookType.isRequired,
  inCart: PropTypes.bool
};
