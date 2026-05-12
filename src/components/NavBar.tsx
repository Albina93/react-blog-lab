import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav
      style={{
        marginBottom: "2rem",
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/blog">Blog</Link>
      {isAuthenticated ? (
        <>
          <Link to="/admin">Admin</Link>
          <button onClick={logout}>Log Out</button>
        </>
      ) : (
        <Link to="/login">Log In</Link>
      )}
    </nav>
  );
}
export default NavBar;
