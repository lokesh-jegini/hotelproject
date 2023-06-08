import "./App.scss";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label for="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
          onChange={handleChange}
        />
        <label for="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
