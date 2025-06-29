import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="topnav">
      <h1>Resolve Now</h1>
      {user && <button onClick={logout} className="logout-btn">Logout</button>}
    </nav>
  );
}
