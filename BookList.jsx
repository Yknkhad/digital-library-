import React from 'react'; 
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div className="book-lists">
      {/* If no books are found, display a message */}
      {books.length === 0 ? (
        <p>No books found</p>
      ) : (
        books.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </div>
  );
};

export default BookList;
