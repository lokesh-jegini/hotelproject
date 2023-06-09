import React, { useState } from "react";
import "./Dashboard.scss";
export default function Dashboard() {
  const [count, setCount] = useState(0);
  const incerement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p onMouseOver={incerement}>${count}</p>
    </div>
  );
}
