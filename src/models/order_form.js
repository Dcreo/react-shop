import { makeAutoObservable, observable, computed, action } from "mobx";

class OrderForm {
  constructor() {
    makeAutoObservable(this)
  }

  state = {
    name: '',
    surname: '',
    patronymic: ''
  }

  get fullname() {
    let { name, surname, patronymic } = this.state;
    return [surname, name, patronymic].join(' ');
  }

  setField(field, value) {
    this.state[field] = value
  }
}

export default new OrderForm()
