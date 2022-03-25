export default class SnapshotMaker {
  make(type, content) {
    switch (type) {
    case 'products':
      this.productsSnapshot(content)
      break;
    }
  }

  productsSnapshot(content) {
    let productsWithTotalPrice = content.map((product) => {
      return {
        ...product,
        totalPrice: product.count * product.price
      }
    })
    let totalSum = productsWithTotalPrice.reduce((injector, product) => injector + product.totalPrice, 0)
    return { productsWithTotalPrice, totalSum }
  }
}
