import { signOut } from "firebase/auth";
import { auth } from "./firebase";

export default function Dashboard() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Dashboard</h1>

      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          background: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </div>
  );
}