import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Card from "./components/Card.jsx";
import Button from "./components/Button.jsx";
import "./index.css"; // optional styling

export default function App() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main">
        <Header />

        {/* Cards */}
        <div className="cards">
          <Card title="Students" value="800" />
          <Card title="Teachers" value="50" />
          <Card title="Admins" value="3" />
        </div>

        {/* Button */}
        <div style={{ marginTop: "20px" }}>
          <Button label="Add Student" onClick={() => alert("Add Student Clicked")} />
        </div>
      </div>
    </div>
  );
}