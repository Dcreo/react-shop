import React, { useState } from 'react';
import Changer from '@components/changer';
import OrderForm from '@components/order_form';
import OrderFinish from '@components/order_finish';
import Cart from '@models/cart';
import { Button, Table, InputGroup, Form, Container } from 'react-bootstrap';
import { observer } from "mobx-react";
import Router from '@routings/router'

export default @observer class Order extends React.Component {
  changeProductCount = (count, i) => {
    Cart.changeCount(i, count)
  }

  productSumPrice = (product) => {
    return product.count * product.price
  }

  productsTable = () => {
    return Cart.products.map((p, i) => {
      return <tr key={i}>
               <td>{ p.title }</td>
               <td>
                 <Changer changeCountCallback={(count) => this.changeProductCount(count, i)} min={1} max={p.rest} />
               </td>
               <td>{ this.productSumPrice(p) } руб.</td>
             </tr>
    })
  }

  renderBlock = () => {
      return <div>
               <Container>
                 <Table striped bordered size="sm" borderless="false">
                    <thead>
                      <tr>
                        <th>Позиция</th>
                        <th>Количество</th>
                        <th>Сумма (руб.)</th>
                      </tr>
                    </thead>
                    <tbody>
                     { this.productsTable() }
                      <tr>
                        <td colSpan="2"><strong>Итого</strong></td>
                        <td>{ Cart.total } руб.</td>
                      </tr>
                    </tbody>
                 </Table>
                   <Button onClick={() => Router.moveTo('orderForm') } variant="primary">Оформить заказ</Button>
               </Container>
             </div>
  }

  render() {
    return <div>{ this.renderBlock() }</div>
  }
}
