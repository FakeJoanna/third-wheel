class ShoppingCart {
  constructor() {
    this.items = []
  }

  addItems(itemName, quantity, price) {
    this.items.push({
      name: itemName,
      quantity: quantity,
      price: price,
    })

    removeItems((itemName) => {
      this.items = this.items.filter((item) => item.name !== itemName)
    })

    getTotal(() => {
      return this.items.reduce((total, item) => {
        return total + (item.quantity + item.price)
      }, 0)
    })

    displayCart(console.log(this.items))
  }
}

const cart = new ShoppingCart()

module.exports = ShoppingCart()
