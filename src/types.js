import PropTypes from "prop-types";

export const BookType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string,
    shortDescription: PropTypes.string,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    specialOffer: PropTypes.bool.isRequired
});

export const BookListType = PropTypes.arrayOf(BookType);