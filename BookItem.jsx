import React from 'react'; 

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      {/* Display the book title */}
      <h2>{book.title}</h2>

      {/* Display the author of the book */}
      <p>Author: {book.author}</p>

      {/* Display the genre of the book */}
      <p>Genre: {book.genre}</p>
    </div>
  );
};

export default BookItem;
