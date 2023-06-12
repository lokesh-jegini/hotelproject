import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Home extends Component {
  state = {
    product: 'iphone',
    price: 20000,
  }

  render() {
    const updatePrice = () => { 
      let p = document.querySelector('.rate').value;
      this.state.price = p
       this.setState({ price: p })
    }
    return (
      <div>
        <div className="home">
          <div className="product">{ this.state.product}</div>
          <div className="home__price">{this.state.price}</div>
          <input type="number" className='rate' />
          <button onClick={updatePrice}>update</button>
          </div>
      </div>
    )
  }
}

export default Home
