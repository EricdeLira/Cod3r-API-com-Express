const porta = 3003

import express, { urlencoded } from 'express'
import { getAllProducts, getProduct, saveProduct, deleteProduct } from './database'

const app = express()

app.use(urlencoded())

app.get('/produtos', (req, res, next) => {
    res.send(getAllProducts())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(getProduct(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const product = saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.put('/produtos/:id', (req, res, next) => {
    const product = saveProduct({
        name: req.body.name,
        price: req.body.price,
        id: parseInt(req.params.id)
    })
    res.send(product)
})

app.delete('/produtos/:id', (req, res, next) => {
    const product = deleteProduct(req.params.id)
    res.send(product)
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})