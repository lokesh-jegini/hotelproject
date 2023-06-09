import React from "react";
import "./About.scss";
import { useLocation } from "react-router-dom";

export default function About() {
  let { search } = useLocation();
  let query = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h1>about</h1>
      <h1>Name:{query.get('name')}</h1>
      <h1>Age:{query.get('age')}</h1>
    </div>
  );
}
