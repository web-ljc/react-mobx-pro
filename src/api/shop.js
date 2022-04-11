const _products = [
  {id: 1, title: 'iphone11', price: 500.01, inventory: 2},
  {id: 2, title: 'oppo', price: 10.21, inventory: 10},
  {id: 3, title: 'xiaomi', price: 20.11, inventory: 5},
]
export const getAllProducts = callback => {
  setTimeout(function() {
    callback(_products)
  }, 100)
}

export const buyProducts = (Products, callback, errorCallback) => {
  setTimeout(() => {
    Math.random() > 0.5 ? callback() : errorCallback()
  }, 100);
}