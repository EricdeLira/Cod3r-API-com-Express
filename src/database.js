const sequence = {
    _id: 1,
    get id(){ return this._id++ }
}

const products = {}

function saveProduct(product){
    if (!product.id) product.id = sequence.id
        products[product.id] = product
    return product
}

function getProduct(id){
    return products[id] || {}
}

function getAllProducts(){ 
    return Object.values(products)
}

function deleteProduct(id){
    delete products[id]
}

export default {saveProduct, getProduct, getAllProducts, deleteProduct}