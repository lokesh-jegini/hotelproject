import React, { useState } from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  let [counter, setCounter] = useState(0)
  function increment() {
      setCounter(++counter)
  }

  return (
    <>
      <div className="home">
        <p className="counter">
          { counter}
        </p>
        <button className="btn btn-primary" onClick={increment}>Increment</button>
      </div>
    </>
  );
}

export default Home;
