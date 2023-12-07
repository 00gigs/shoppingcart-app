const productsArray = [
    {
        id:'1',
        title:'tier-24',
        price:5.99
    },

    {
        id:'2',
        title:'tier-54',
        price:5.99
    },
    {
        id:'3',
        title:'tier-43',
        price:5.99
    }
]
function getProductData(id){
    let productData = productsArray.find(product=> product.id === id)
    if (productData === undefined){
        console.log('Sorry, data does not exist for ID:' + id)
        return undefined
    }

    return productData
}

const productStore = {productsArray ,getProductData }

export  { productStore }