import React from 'react';

export default class OrderForm extends React.Component {
  state = {
    name: '',
    surname: '',
    patronymic: ''
  }

  handleEvent = (e) => {
    console.log(this)
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return(
      <div>
        <pre>{ JSON.stringify(this.props.products) }</pre>
        <pre>{ JSON.stringify(this.state) }</pre>
        <h2>Для совершения заказа введите данные:</h2>
        <hr />
        <div>
          <label>Имя:</label>
          <input onChange={this.handleEvent} name="name" type="text" />
        </div>
        <div>
          <label>Фамилия:</label>
          <input onChange={this.handleEvent} name="surname" type="text" />
        </div>
        <div>
          <label>Отчество:</label>
          <input onChange={this.handleEvent} name="patronymic" type="text" />
        </div>
      </div>
    )
  }
}
