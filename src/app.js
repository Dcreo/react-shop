import React, { useState } from 'react';
import Changer from './components/changer';
import OrderForm from './components/order_form';
import OrderFinish from './components/order_finish';
import SnapshotMaker from './commons/snapshot_maker';
import ProductsData from './data/products'

export default function(props) {
  const [products, setProducts] = useState(ProductsData)
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [showProducts, setShowProducts] = useState(true)
  const [showOrderFinish, setShowOrderFinish] = useState(false)
  const [productsSnapshot, setProductsSnapshot] = useState()
  const [orderData, setOrderData] = useState()

  const toggleOrderForm = (e) => {
    setShowOrderForm(true)
    setShowOrderFinish(false)
  }

  const toggleOrderFinish = (e, data) => {
    setShowOrderForm(false);
    setShowOrderFinish(true);
    setOrderData({ ...data });
  }

  const toggleProducts = () => {
    setShowProducts(true);
    setShowOrderForm(false);
  }

  const goBack = (page) => {
    switch (page) {
      case 'orderForm':
        toggleOrderForm();
        break;
      case 'products':
        toggleProducts();
        break;
    }
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
    if (showProducts && !showOrderForm && !showOrderFinish) {
      return <div>
               <Changer products={products} changeCountCallback={changeProductCount} />
               <button onClick={ () => { toggleOrderForm(); createProductsSnapshot() }}>Оформить заказ</button>
             </div>
    } else if (showOrderForm && !showOrderFinish) {
      return <OrderForm orderFormCallback={toggleOrderFinish} />
    } else if (showOrderFinish && !showOrderForm) {
      return <OrderFinish productsSnapshot={productsSnapshot} orderData={orderData} goBackCallback={goBack} />
    }
  }

  return(
    renderBlock()
  );
}
