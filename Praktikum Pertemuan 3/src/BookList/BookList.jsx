import React from "react";
import PropTypes from "prop-types";

const BookList = ({ books, onEdit, onDelete }) => {
  if (books.length === 0) {
    return (
      <p style={{ color: "#777", fontStyle: "italic" }}>
        Tidak ada buku untuk ditampilkan.
      </p>
    );
  }

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {books.map((book) => (
        <li
          key={book.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "16px 20px",
            marginBottom: "14px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.06)",
            transition: "all 0.3s ease",
          }}
        >
          <div>
            <h3
              style={{
                margin: "0 0 6px 0",
                fontSize: "1.25rem",
                color: "#222",
              }}
            >
              {book.title}
            </h3>
            <p style={{ margin: "0", fontSize: "0.95rem", color: "#555" }}>
              oleh <em>{book.author}</em>
            </p>
            <p
              style={{ margin: "8px 0 0 0", fontSize: "0.9rem", color: "#444" }}
            >
              Status: <strong>{book.status}</strong>
            </p>
          </div>

          <div style={{ marginTop: "12px" }}>
            <button
              onClick={() => onEdit(book)}
              style={{
                marginRight: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                padding: "6px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(book.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "#fff",
                border: "none",
                padding: "6px 14px",
                borderRadius: "6px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Hapus
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
