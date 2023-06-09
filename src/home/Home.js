import React, { useState } from "react";
import "./Home.scss";

export default function Home() {
  const [count, setCount] = useState(0);
  const incerement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={incerement}>clickhere${count}</button>
    </div>
  );
}
