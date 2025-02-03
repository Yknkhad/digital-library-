import React, { useState } from 'react';
// import './App.css';


const Forms = ({ onAddBook }) => {
  
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (!title || !author || !genre) {
      setError('the fields are required!');
      return;
    }

   
    setError('');

    const newBook = {
      id: Date.now(),
      title,
      author,
      genre
    };

    onAddBook(newBook);

    setTitle('');
    setAuthor('');
    setGenre('');
  };

  return (
    <div className='book-Forms'>
      {/* Form element that handles user input */}
      <form onSubmit={handleSubmit}>
        <h2>Add a New Book</h2>
        
        {/* Input the book title */}
        <input 
          type="text" 
          placeholder="title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} // Update state when user types
        />

        {/* Input  book author */}
        <input 
          type="text" 
          placeholder="Writer" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} // Update state when user types
        />

        {/* Input book genre */}
        <input 
          type="text" 
          placeholder="Genre" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} // Update state when user types
        />

        {/* Display error message if validation fails */}
        {error && <p className="form-error">{error}</p>}

        {/* Button to submit the form. Disable it if any field is empty */}
        <button type="proceed" disabled={!title || !author || !genre}>
            ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Forms;
