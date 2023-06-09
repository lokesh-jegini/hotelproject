import "./Home.scss";
import React, { useState, useEffect } from "react";
function Home(probs) {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
      });
  }, []);
  console.log(list);
  return (
    <div className="app">
      {list.map((item) => {
        debugger;
        return <p>{item.title}</p>;
      })}
    </div>
  );
}
// export default Home;
export default Home;
