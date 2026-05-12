import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Admin() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
    </div>
  );
}
export default Admin;
