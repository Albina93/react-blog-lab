import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { isAuthenticated, login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/admin");
  };
  if (isAuthenticated) {
    return (
      <div>
        <h3>You are already logged in</h3>
        <p>Head to the admin dashboard or logout from the nav</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Log In</h3>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}
export default Login;
