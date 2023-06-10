import "./Home.scss";
import React, { useState } from "react";
import firebaseDB from "./Firebase.js";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
function Home(probs) {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });
  const { firstname, lastname, email } = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    debugger;
    e.preventDefault();
    // axios
    //   .post(
    //     "https://register-6e570-default-rtdb.firebaseio.com/register.json",
    //     data
    //   )
    //   .then((res) => {
    //     alert("data added successfully");
    //   });
    var dataset=await firebaseDB.child("jegini").push(data, (err) => {
      if (err) {
        console.log(err);
      } else {
        alert("data added successfully");
      }
    });
    setData({
       firstname: "",
    lastname: "",
    email: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="mb-3">
        <label for="exampleFormControlInput" class="form-label">
          first name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput"
          placeholder="first name"
          name="firstname"
          value={firstname}
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label">
          last name
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          placeholder="last name"
          name="lastname"
          value={lastname}
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
// export default Home;
export default Home;
