import React from 'react'
import './About.scss'
  import { useParams } from "react-router-dom";
  
export default function About() {
   const data = useParams();
  return (
    <div>
      <h1>about</h1>
     <h3>{data.name}</h3>
    </div>
  )
}
