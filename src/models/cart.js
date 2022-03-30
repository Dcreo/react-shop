import ProductsData from '@data/products';
import { makeAutoObservable, observable, computed, action } from "mobx";

class Cart {
  constructor() {
    makeAutoObservable(this)
  }

  products = ProductsData

  changeCount(i, count) {
    this.products[i].count = count
  }

  get total() {
    return this.products.reduce((t, p) => t + (p.price * p.count), 0)
  }
}

export default new Cart()
