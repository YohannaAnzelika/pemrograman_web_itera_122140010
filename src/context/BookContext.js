// src/context/BookContext.js
import React, { createContext, useState, useCallback } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useLocalStorage("books", []);
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Menambah buku baru dengan updater function
  const addBook = useCallback(
    (book) => {
      setBooks((prevBooks) => [...prevBooks, book]);
    },
    [setBooks]
  );

  // ✅ Mengedit buku berdasarkan id dengan updater function
  const editBook = useCallback(
    (updatedBook) => {
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === updatedBook.id ? updatedBook : book
        )
      );
    },
    [setBooks]
  );

  // ✅ Menghapus buku dengan callback opsional
  const deleteBook = useCallback(
    (bookId, onSuccess) => {
      setBooks((prevBooks) => {
        const updatedBooks = prevBooks.filter((book) => book.id !== bookId);
        if (onSuccess) onSuccess();
        return updatedBooks;
      });
    },
    [setBooks]
  );

  const deleteAllBooks = useCallback(() => {
    setBooks([]);
  }, [setBooks]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <BookContext.Provider
      value={{
        books,
        addBook,
        editBook,
        deleteBook,
        deleteAllBooks,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};
