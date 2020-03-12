import React, { Component } from "react";
import "@fortawesome/fontawesome-free/js/all";
import "bulma/css/bulma.css";
import "./App.css";
import { Cart } from "./components/Cart";
import { Layout } from "./components/Layout";
import { BookList } from "./components/BookList";
import { Search } from "./components/Search/Search";
import axios from "axios";

class App extends Component {
  state = {
    cart: [],
    books: [],
    isFetching: false,
    hasError: false,
    searchValue: ""
  };
  componentDidMount() {
    axios
      .get("https://dor-web-book-store-api.herokuapp.com/get-all-books")
      .then(response => {
        this.setState({ books: [...response.data.data] });
        console.log(this.state.books);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  filterBooks = () => {
    axios
      .get("https://dor-web-book-store-api.herokuapp.com/search-books", {
        params: {
          q: this.state.searchValue
        }
      })
      .then(response => {
        this.setState({ books: [...response.data.data] });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  handleAddBookToCart = (book, isbn) => {
    const addToCard = () => {
      this.setState(prevState => ({
        cart: [...prevState.cart, book],
        books: prevState.books.map(book => (book.isbn === isbn ? { ...book, inCart: true } : book))
      }));
    };
    addToCard();
  };

  handleRemove = (book, isbn) => {
    let index = this.state.cart.indexOf(obj => book.isbn === isbn);
    this.setState(prevState => ({
      cart: prevState.cart.filter(item => item.isbn !== isbn),
      books: prevState.books.map(book => (book.isbn === isbn ? { ...book, inCart: false } : book))
    }));
  };

  handleInputChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    return (
      <Layout aside={<Cart cartItems={this.state.cart} onRemoveItem={this.handleRemove} />}>
        <div className='tile is-parent'>
          <div className='tile is-child box'>
            <p className='title'>Available books</p>
            {this.state.isFetching && (
              <progress className='progress is-large is-primary' max='100'>
                15%
              </progress>
            )}
            {this.state.hasError && (
              <p className='has-text-danger'>Problem with connection to the API appeared</p>
            )}
            <Search
              value={this.state.searchValue}
              changeFn={this.handleInputChange}
              filterBooks={this.filterBooks}
            />

            <BookList
              items={this.state.books}
              onAddItemToCart={this.handleAddBookToCart}
              itemsInCart={this.state.cart}
              isFetching={this.state.isFetching}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default App;
