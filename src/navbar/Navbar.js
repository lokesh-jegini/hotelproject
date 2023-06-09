import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const user="lokesh"
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to={ `/about/${user}`}>About</Link>
    </div>
  );
}
