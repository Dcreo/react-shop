export default class SnapshotMaker {
  make(type, content) {
    let snapshot;
    switch (type) {
    case 'products':
      snapshot = this.productsSnapshot(content)
      break;
    }

    return snapshot;
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
