import BookForm from "../../BookForm/BookForm";
import BookList from "../../BookList/BookList";
import BookFilter from "../../BookFilter/BookFilter";
import { BookContext } from "../../context/BookContext";
import React, { useContext, useState } from "react";

const Home = () => {
  const { books, addBook, editBook, deleteBook } = useContext(BookContext);
  const [filter, setFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingBook, setEditingBook] = useState(null);
  const [notification, setNotification] = useState(""); // ✅ Notifikasi

  const filteredBooks = books.filter(
    (book) =>
      (!filter || book.status === filter) &&
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => setNotification(""), 3000); // hilang setelah 3 detik
  };

  const handleAddBook = (bookData) => {
    if (editingBook) {
      editBook({ ...editingBook, ...bookData });
      setEditingBook(null);
      showNotification("✏️ Buku berhasil diperbarui!");
    } else {
      addBook({ ...bookData, id: Date.now().toString() });
      showNotification("✅ Buku berhasil ditambahkan!");
    }
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
  };

  const handleDeleteBook = (bookId) => {
    deleteBook(bookId, () => {
      showNotification("🗑️ Buku berhasil dihapus!");
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Manajemen Buku Pribadi</h1>

      {/* ✅ Notifikasi */}
      {notification && (
        <div
          style={{
            background: "#e0ffe0",
            color: "#155724",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "15px",
            border: "1px solid #b6f2b6",
          }}
        >
          {notification}
        </div>
      )}

      <BookForm onSubmit={handleAddBook} initialData={editingBook} />

      <input
        type="text"
        placeholder="Cari buku..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          marginBottom: "15px",
          padding: "5px",
          borderRadius: "4px",
          width: "100%",
        }}
      />

      <BookFilter filter={filter} onFilterChange={setFilter} />

      <BookList
        books={filteredBooks}
        onEdit={handleEditBook}
        onDelete={handleDeleteBook}
      />
    </div>
  );
};

export default Home;
