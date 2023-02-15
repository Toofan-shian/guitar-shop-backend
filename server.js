const express = require('express')
const {data: products} = require('./data')

const server = express()

server.use(express.json())

server.get('/products/all', (req, res) => {
  res.status(200).json(products)
})

server.get('/products/pops', (req, res) => {
  const pops = products.filter(p => p.popular == true)
  res.status(200).json(pops)
})


server.listen(5000, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('listening on 5000...')
})