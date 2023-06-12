import React, { useState } from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  // const [state, setState] = useState({
  //   product: 'iphone',
  //   price: 20000,
  // });
   const [product, setproduct] = useState("iphone");
 const updatePrice = () => { 
   let p = document.querySelector('.rate').value;
   setproduct((prev) => {  
      return prev+p;
     
    })};
  return (
    <>
     <div>
        <div className="home">
              <div className="product">produc name:{product}</div>
          {/* <div className="product">produc name:{state.product}</div> */}
          {/* <div className="home__price">produc price:{state.price}</div> */}
          <input type="text" className='rate' />
          <button onClick={() => {
            updatePrice()
          }}>update</button>
          </div>
      </div>
    </>
  );
}

export default Home;
