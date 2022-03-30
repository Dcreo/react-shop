import React from 'react';
import { Button } from 'react-bootstrap';
import OrderFormModel from '@models/order_form';
import Router from '@routings/router';
import { FloatingLabel, Form } from 'react-bootstrap';
import BackButton from '@components/back_button';

export default class OrderForm extends React.Component {
  handleEvent = (e) => {
    console.log(e)
    OrderFormModel.setField(e.target.name, e.target.value)
  }

  render() {
    return(
      <div className="container">
        <h2>Для совершения заказа введите данные:</h2>
        <br />
        <FloatingLabel controlId="floatingInput" label="Имя" className="mb-3">
          <Form.Control onChange={this.handleEvent} name="name" type="text" placeholder="Укажите ваше имя" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Фамилия" className="mb-3">
          <Form.Control onChange={this.handleEvent} name="surname" type="text" placeholder="Укажите вашу фамилию" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Отчество" className="mb-3">
          <Form.Control onChange={this.handleEvent} name="patronymic" type="text" placeholder="Укажите ваше отчество" />
        </FloatingLabel>
        <BackButton variant={"info"} text={"Назад"} onClickCallback={() => Router.moveTo('order')} />
        <Button onClick={() => Router.moveTo('orderFinish')} variant="success">Отправить данные</Button>
      </div>
    )
  }
}
