import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import initialBooks from './data/books'; 
import DisplayBooks from './components/DisplayBooks';
import './App.css';
import Forms from './components/Forms';

const App = () => {
  const [books, setBooks] = useState(initialBooks); // State for books
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [selectedBook, setSelectedBook] = useState(null); // State for selected book

  // Filter books based on the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle adding a new book
  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  // Handle selecting a book to display its details
  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  // Filter books based on the search term
  const filteredBooks = books.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="app">
      <h1>Digital Library</h1>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <Forms onAddBook={handleAddBook} />

      {/* Display filtered books in a list */}
      <BookList books={filteredBooks} onSelectBook={handleSelectBook} />

      {/* Add a new book form */}

      {/*message is displayed when no books match the search */}
      {filteredBooks.length === 0 && searchTerm && (
        <p>No books found matching your search.</p>
      )}

      {/* Show the selected book details if available */}
      {selectedBook && (
        <div className="Book-details">
          <h2>Book Details</h2>
          <DisplayBooks book={selectedBook} />
        </div>
      )}
    </div>
  );
};

export default App;
