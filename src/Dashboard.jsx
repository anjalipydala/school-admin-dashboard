import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Dashboard() {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>School Admin Dashboard</h1>
      <p>Welcome! You are logged in.</p>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "#ff4d4d",
          color: "white",
          border: "none",
          borderRadius: 5,
          cursor: "pointer"
        }}
      >
        Logout
      </button>
    </div>
  );
}