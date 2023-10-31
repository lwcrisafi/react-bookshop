import React from "react";
import { useEffect, useState } from "react";
import './Booklist.scss'

function BookList() {
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async (pageNumber) => {
    try {
      const response = await fetch(
        `https://classes.codingbootcamp.cz/assets/classes/books-api/latest-books.php?page=${pageNumber}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }

      const data = await response.json();
      setBooks(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching books:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="book-list">
      <h3>Latest Books</h3>
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <strong>Title:</strong> {book.title}
              <br />
              <strong>Author:</strong> {book.author}
              <br />
              <strong>Published Year:</strong> {book.published}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookList;
