import { useContext } from "react";
import { BookContext } from "../src/context/BookContext";

const useBookStats = () => {
  const { books } = useContext(BookContext);

  if (!Array.isArray(books)) {
    console.error(
      "Invalid books data, expected an array but got:",
      typeof books
    );
    return {
      totalBooks: 0,
      ownedBooks: 0,
      readingBooks: 0,
      wishlistBooks: 0,
    };
  }

  const totalBooks = books.length;
  const ownedBooks = books.filter((book) => book.status === "miliki").length;
  const readingBooks = books.filter((book) => book.status === "baca").length;
  const wishlistBooks = books.filter((book) => book.status === "beli").length;

  return {
    totalBooks,
    ownedBooks,
    readingBooks,
    wishlistBooks,
  };
};

export default useBookStats;
