import React from "react";

export const Search = ({ changeFn, value, filterBooks }) => (
  <div className='search'>
    <input
      className='search__input'
      onChange={changeFn}
      value={value}
      placeholder='title, description'></input>
    <button className='search__button' onClick={filterBooks}>
      SEARCH
    </button>
  </div>
);
