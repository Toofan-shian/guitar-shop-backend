const express = require('express')
const {products, users} = require('./data')

const server = express()

server.use(express.json())

server.get('/products/all', (req, res) => {
  res.status(200).json(products)
})

server.get('/:userId/cartItems', (req, res) => {
  let userId = req.params.userId
  let user = users.find(user => user.id == userId);
  let productIds = user.cartItems.map(item => item.itemId)
  let cartItems = productIds.map(id => products.find(p => p.id == id))
  res.status(200).json(cartItems)
})

server.post('/:userId/cartItems', (req, res) => {
  let {product} = req.body;
  let {userId} = req.params;
  let user = users.find(user => user.id == userId)
  let userCartItem = user.cartItems.find(p => p.itemId == product.itemId)
  if (userCartItem) {
    userCartItem.quantity += 1;
    res.status(201)
    res.end()
    console.log('1')
    return
  }
  user.cartItems.push(product)
  res.status(201)
  res.end()
  console.log('2')
})


server.listen(5000, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listening on 5000...')
})