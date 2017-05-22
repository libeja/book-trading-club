import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component will take in the allBooks array and a filter function and will return a 
 * list of <li>'s The filter will determine whether the list is for books awaiting 
 * users approval or user initiated trades.
 */
const BookList = ({ books, filter, cancelRequest, acceptTrade }) => {
  const filteredBooks = books.filter(filter);
  console.log(cancelRequest);

  return (
    <ul>
      {filteredBooks.map(book => 
        <li 
          key={book.title}
        >
          {book.title}
          {/** 
            * If the acceptTrade function is  null, 
            * it means the list is for user initiated requests 
            */}
          {!acceptTrade 
            ? <span onClick={cancelRequest.bind(null, book.title)}>cancel request</span>
            : <div>
                <span 
                  onClick={acceptTrade.bind(null, book.title)}
                >
                  Accept
                </span>
                <span 
                  onClick={acceptTrade.bind(null, book.title)}
                >
                  Reject
                </span>
              </div>
          }
        </li>)}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
  cancelRequest: PropTypes.func,
  acceptTrade: PropTypes.func
};

/**
 * This component will render the list to the view
 */
const PendingTradeDetails = ({ allBooks, currentUser, cancelRequest, acceptTrade }) => {
  // filters all books for books that are pending trade
  const filteredBooks = allBooks.filter(book => book.tradePending);

  return (
    <div>
      {/* This list will display all trades the user initiated */}
        <h2>Your requests</h2>
        <BookList 
          books={filteredBooks} 
          filter={book => currentUser === book.tradeRequestedBy}
          cancelRequest={cancelRequest}
        />
      {/* This list will display all trades awaiting the user's approval */}
        <h2>Trades awaiting your approval</h2>      
        <BookList 
          books={filteredBooks} 
          filter={book => (currentUser === book.owner && currentUser !== book.tradeRequestedBy)}
          cancelRequest={cancelRequest}
          acceptTrade={acceptTrade}           
        />
    </div>
  );
};

PendingTradeDetails.propTypes = {
  allBooks: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired,
  cancelRequest: PropTypes.func.isRequired,
  acceptTrade: PropTypes.func.isRequired
};

export default PendingTradeDetails;