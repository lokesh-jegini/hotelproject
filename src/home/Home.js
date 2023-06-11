import React, { useState } from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  let greeting;
  const time = new Date().getHours();

  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 20) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
  }

  return <div className="Home">{greeting}</div>;
}

export default Home;
