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
    return
  }
  user.cartItems.push(product)
  res.status(201)
  res.end()
})

server.delete('/:userId/cartItems/:itemId', (req, res) => {
  let {userId, itemId} = req.params;
  let user = users.find(user => user.id == userId);
  let cartItemIndex = user.cartItems.findIndex(item => item.itemId == itemId)
  if (cartItemIndex < 0) {
    res.status(400).json({error: 'item does not exist'})
    console.log('1')
    return;
  }
  user.cartItems.splice(cartItemIndex, 1);
  res.status(200).json(user.cartItems)
  console.log('2')
})

server.patch('/:userId/cartItems', (req, res) => {
  let {userId} = req.params;
  let {product} = req.body;
  let user = users.find(user => user.id == userId)
  let cartItemIndex = user.cartItems.findIndex(p => p.itemId == product.itemId);
  user.cartItems.splice(cartItemIndex, 1, product)
  res.status(200).json(user.cartItems)
})

server.listen(5000, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listening on 5000...')
})