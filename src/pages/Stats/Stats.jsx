import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Stats = () => {
  const { books } = useContext(BookContext);

  const ownedBooks = books.filter((book) => book.status === "miliki").length;
  const readingBooks = books.filter((book) => book.status === "baca").length;
  const wishlistBooks = books.filter((book) => book.status === "beli").length;

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Statistik Buku</h1>
      <ul>
        <li>
          <strong>Buku yang dimiliki:</strong> {ownedBooks}
        </li>
        <li>
          <strong>Buku yang sedang dibaca:</strong> {readingBooks}
        </li>
        <li>
          <strong>Buku yang ingin dibeli:</strong> {wishlistBooks}
        </li>
      </ul>
    </div>
  );
};

export default Stats;
