import React, { useState } from 'react';
import Changer from './components/changer';
import OrderForm from './components/order_form';
import SnapshotMaker from './commons/snapshot_maker';
import ProductsData from './data/products'

export default function(props) {
  const [products, setProducts] = useState(ProductsData)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showProducts, setShowProducts] = useState(true)
  const [productsSnapshot, setProductsSnapshot] = useState()

  const toggleOrderForm = (e) => {
    setShowOrderForm(true)
  }

  const changeProductCount = (i, operator) => {
    let newProducts = [...products]
    let product = { ...newProducts[i] }
    product.count = operator == '+' ? product.count + 1 : product.count - 1
    newProducts[i] = product
    if ((product.rest < product.count) || product.count < 1) return
    setProducts(newProducts)
  }

  const createProductsSnapshot = () => {
    let snaphoter = new SnapshotMaker()
    setProductsSnapshot(snaphoter.make('products', products))
  }

  const renderBlock = () => {
    if (showProducts && !showOrderForm) {
      return <div>
          <pre>{JSON.stringify(products, null, 2)}</pre>
          <Changer products={products}
                  changeCountCallback={changeProductCount} />

          <button onClick={ () => { toggleOrderForm(); createProductsSnapshot() }}>Оформить заказ</button>
        </div>
    } else if (showOrderForm) {
      return <OrderForm products={products} />
    }
  }

  return(
    renderBlock()
  );
}
