## project implement

step-1
1)pages --capletter first word
2)folder --all are small letter
3)component --capletter first letter

---

step-2 (only 3 files should be outside , remaing should be inside the folder)
1)App.js
2)Index.js
3)App.scss

---

step-3 (multi page)
1)react-route-dom (for create multipage page application)
2){BrowserRouter,Routes,Route} path, element={component}
if we call multible components all will dispaly at a time if we want to display a particular component we go for react-route-dom.
import React from 'react'
import "./App.scss";
import Home from "./home/Home";
import About from "./about/About";
import Dashboard from "./dashboard/Dashboard";
import { BrowserRouter , Router, Route } from "react-router-dom";
export default function App() {
return (
<div>
<Home />
<Dashboard />
<About />
</div>
)
}
(if we type path manually in the google url path we get exact page if page mathch)

---

step-4 (multi page navigate through navabar by using link tag) and to (for to attribute we give path link)
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
return (
<div>
<Link to="/">Home</Link>
<Link to="/dashboard">Dashboard</Link>
<Link to="/about">About</Link>
</div>
);
}
