// src/App.js
import React, { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import { BookProvider, BookContext } from "./context/BookContext";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import "./App.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useContext(BookContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0, color: "var(--primary)" }}>📚 Book Manager</h1>
        <button
          onClick={toggleDarkMode}
          style={{ width: "auto", padding: "0.5rem 1rem" }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <nav style={{ margin: "1rem 0", display: "flex", gap: "1rem" }}>
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/stats"
          className={location.pathname === "/stats" ? "active-link" : ""}
        >
          Stats
        </Link>
      </nav>

      <hr />

      <main>{children}</main>
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/stats"
        element={
          <Layout>
            <Stats />
          </Layout>
        }
      />
    </Routes>
  );
};

const App = () => {
  return (
    <BookProvider>
      <Router>
        <AppRoutes />
      </Router>
    </BookProvider>
  );
};

export default App;
