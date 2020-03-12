# Web team recruitment task - Junior React developer 2020
Simple book store application. User can:
- see all available books in-store (fetched from the API)
- search available books by their title
- add a book to a cart
- see that he added a book to cart (a buy button is disabled)
- remove a book from a cart
- see total price 
- see discount
- see the final price to pay 


## Discout 
Some books are part of a special offer (have set property `specialOffer` to `true`). Every three books on promotion added to cart make the lower price book free  


### API 
Actual URL of the API is: https://dor-web-book-store-api.herokuapp.com

#### Get all books

```/get-all-books```

return all books from JSON file


#### Get books

```/get-books```

This endpoint return books grouped by pages

Arguments:
- page - actual page to receive - started from 1.
- limit - number of elements in page



#### Search books by title

```/search-books```

This endpoint return all books that includes search pharse

Arguments:
- q - search pharse. If not provider returns all available books.

### Technical summary
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- This project includes [bulma](https://bulma.io) CSS framework.# droids-on-roids-task
