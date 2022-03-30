import React from 'react';
import Cart from '@models/cart';
import OrderFormModel from '@models/order_form';
import Router from '@routings/router';

export default class OrderFinish extends React.Component {
  render() {
    let products = Cart.products.map((p, i) => {
      return(<div key={i}>{ p.title } - { p.totalPrice } ({p.count} шт.)</div>)
    })

    return(
      <div>
        <a onClick={() => Router.moveTo('orderForm')}>Назад</a>
        <h2>Ваш заказ успешно оформлен</h2>
        <p>Уважаемый {OrderFormModel.fullname} ваш заказ на {Cart.total} рублей успешно создан.</p>

        { products }
        <hr />
      </div>
    )
  }
}
