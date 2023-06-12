import React, { useState } from "react";
import "./Home.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function Home(props) {
  const [state, setState] = useState({
    product: 'iphone',
    price: 20000,
  });
  
  const updatePrice = () => { 
    var rate = document.querySelector('.rate').value;
    setState({
      ...state,
      product: rate,

    });
  }
  
  return (
    <>
     <div>
        <div className="home">
          
          <div className="product">produc name:{state.product}</div> 
          <div className="home__price">produc price:{state.price}</div> 
          {/* <div>{ JSON.stringify(state)}</div> */}
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
