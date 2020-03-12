import React from "react";
import { BookListType } from "../../types";
import { BookListItem } from "./BookListItem";

export const BookList = ({ items, onAddItemToCart }) => (
  <div className='books_list'>
    {items.map(item => (
      <div className='box' key={item.isbn}>
        <BookListItem inCart={item.inCart} item={item} onAddItemToCart={onAddItemToCart} />
      </div>
    ))}
  </div>
);

BookList.propTypes = {
  items: BookListType.isRequired
};
