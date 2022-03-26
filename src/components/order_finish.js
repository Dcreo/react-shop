import React from 'react';

export default class OrderFinish extends React.Component {
  fullname() {
    let { name, surname, patronymic } = this.props.orderData;
    return [surname, name, patronymic].join(' ');
  }

  total() {
    return this.props.productsSnapshot.totalSum
  }

  render() {
    let products = this.props.productsSnapshot.productsWithTotalPrice.map((p, i) => {
      return(<div key={i}>{ p.title } - { p.totalPrice } ({p.count} шт.)</div>)
    })

    return(
      <div>
        <a onClick={() => this.props.goBackCallback('orderForm')}>Назад</a>
        <h2>Ваш заказ успешно оформлен</h2>
        <p>Уважаемый {this.fullname()} ваш заказ на {this.total()} рублей успешно создан.</p>

        { products }
        <hr />
      </div>
    )
  }
}
