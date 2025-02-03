import React from 'react';
// import './App.css';

const DisplayBooks = ({ book }) => {
  return (
    <div className="book-details">
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>writer: {book.author}</p>
        <p>Genre: {book.genre}</p>
      </div>
    </div>
  );
};

export default DisplayBooks;