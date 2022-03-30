import React from 'react';
import Order from '@components/order';
import OrderForm from '@components/order_form';
import OrderFinish from '@components/order_finish';
import { makeAutoObservable, observable, computed, action } from "mobx";

class Router {
  constructor() {
    makeAutoObservable(this)
  }

  activeRoute = 'order'

  routes = {
    order: () => <Order />,
    orderForm: () => <OrderForm />,
    orderFinish: () => <OrderFinish />
  }

  moveTo(componentName) {
    this.activeRoute = componentName
  }

  render() {
    return this.routes[this.activeRoute]()
  }
}

export default new Router();
