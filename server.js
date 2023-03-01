const express = require('express')
const {products, users} = require('./data')
const {connectToDb, getDb} = require('./db')
const {ObjectId} = require('mongodb')

const server = express()

server.use(express.json())

let db;
connectToDb((err) => {
  if (err) {
    console.log(err)
  } else {
    db = getDb()
    server.listen(5000, (err) => {
      if (err) {
        console.log(err)
      }
      console.log('listening on 5000...')
    })
  }
})

// all products in store
server.get('/products/all', (req, res) => {
  let products = []

  db.collection('products')
    .find()
    .forEach(product => products.push(product))
    .then(() => res.status(200).json(products))
    .catch((err) => res.status(500).json(err))
})

// products in cart
server.get('/:userId/cartItems', (req, res) => {
  let userId = req.params.userId

  db.collection('users')
    .findOne({id: +userId})
    .then(user => res.status(200).json(user.cartItems))
    .catch(err => res.status(400).json({"error": `${err}`}))
})

// add to cart from product details
server.post('/:userId/cartItems', async (req, res) => {
  let {product} = req.body;
  let {userId} = req.params;

  let user = await db.collection('users').findOne({id: +userId})
  let cartItems = user.cartItems;
  let cartItemIndex = cartItems.findIndex(p => p.itemId == product.itemId)

  try {
    if (cartItemIndex < 0) {
      let response = await db.collection('users').updateOne({id: +userId}, {$addToSet: {cartItems: product}})
      return res.status(201).json(response)
    }
    else {
      cartItems[cartItemIndex].quantity += 1;
      console.log(cartItems)
      let response = await db.collection('users').updateOne({id: +userId}, {$set: {cartItems: cartItems}})
      return res.status(201).json(response)
    }
  }
  catch (err) {
    return res.status(500).json({"error": `${err}`})
  }
  // let user = users.find(user => user.id == userId)
  // let userCartItem = user.cartItems.find(p => p.itemId == product.itemId)
  // if (userCartItem) {
  //   userCartItem.quantity += 1;
  //   res.status(201)
  //   res.end()
  //   return
  // }
  // user.cartItems.push(product)
  // res.status(201)
  // res.end()
})

// remove cart item
server.delete('/:userId/cartItems/:itemId', (req, res) => {
  let {userId, itemId} = req.params;
  let user = users.find(user => user.id == userId);
  let cartItemIndex = user.cartItems.findIndex(item => item.itemId == itemId)
  if (cartItemIndex < 0) {
    res.status(400).json({error: 'item does not exist'})
    return;
  }
  user.cartItems.splice(cartItemIndex, 1);
  res.status(200).json(user.cartItems)
})

// product auantity change in cart
server.patch('/:userId/cartItems', (req, res) => {
  let {userId} = req.params;
  let {product} = req.body;
  let user = users.find(user => user.id == userId)
  let cartItemIndex = user.cartItems.findIndex(p => p.itemId == product.itemId);
  user.cartItems.splice(cartItemIndex, 1, product)
  res.status(200).json(user.cartItems)
})

