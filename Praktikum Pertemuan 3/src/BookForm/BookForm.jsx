import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const BookForm = ({ onSubmit, initialData }) => {
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookStatus, setBookStatus] = useState("miliki");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setBookTitle(initialData.title || "");
      setBookAuthor(initialData.author || "");
      setBookStatus(initialData.status || "miliki");
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookTitle.trim() === "" || bookAuthor.trim() === "") {
      setError("Judul dan Penulis buku tidak boleh kosong.");
      return;
    }

    onSubmit({
      ...initialData,
      title: bookTitle.trim(),
      author: bookAuthor.trim(),
      status: bookStatus,
    });

    if (!initialData) {
      setBookTitle("");
      setBookAuthor("");
      setBookStatus("miliki");
    }

    setError("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div>
        <label htmlFor="title">Judul Buku:</label>
        <input
          id="title"
          data-testid="book-title"
          type="text"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          placeholder="Contoh: Laskar Pelangi"
        />
      </div>

      <div>
        <label htmlFor="author">Penulis:</label>
        <input
          id="author"
          data-testid="book-author"
          type="text"
          value={bookAuthor}
          onChange={(e) => setBookAuthor(e.target.value)}
          placeholder="Contoh: Andrea Hirata"
        />
      </div>

      <div>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          data-testid="book-status"
          value={bookStatus}
          onChange={(e) => setBookStatus(e.target.value)}
        >
          <option value="miliki">Dimiliki</option>
          <option value="baca">Sedang Dibaca</option>
          <option value="beli">Ingin Dibeli</option>
        </select>
      </div>

      {error && (
        <p className="error" data-testid="form-error">
          {error}
        </p>
      )}

      <button className="btn-submit" type="submit" data-testid="submit-button">
        {initialData ? "Simpan Perubahan" : "Tambah Buku"}
      </button>
    </form>
  );
};

BookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    status: PropTypes.string,
  }),
};

export default BookForm;
