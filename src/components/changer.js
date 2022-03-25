import React from 'react';
import Input from './input'

export default class Changer extends React.Component {
  state = {
  }

  inputOnChange(e) {
  }

  productSumPrice(product) {
    return product.count * product.price
  }

  totalPrice() {
    return this.props.products.reduce((value, p) => value + this.productSumPrice(p), 0)
  }

  render() {
    let items = []
    items = this.props.products.map((p, i) => {
      return(
        <div key={i}>
          { p.title }
          <button onClick={() => this.props.changeCountCallback(i, '-')}>-</button>
          <Input value={p.count} onChange={this.inputOnChange} min={1} max={p.rest} />
          <button onClick={() => this.props.changeCountCallback(i, '+')}>+</button>
          { this.productSumPrice(p) } руб.
        </div>
      )
    })

    let total = <div>{ this.totalPrice() } руб.</div>

    return(
      <div>
        { items }
        <hr />
        { total }
      </div>
    )
  }
}
