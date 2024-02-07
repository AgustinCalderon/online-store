const $ = document;
const containerProducts = $.querySelector('#containerProducts') 

const cartStructure = () => ({title, image, description, price}) => {
    return `<div class="cart">
    <h3 class="cart-title">${title}</h3>
    <p class="cart-desc" >${description}</p>
    <img class="cart-img" src="${image}">
    <strong class="cart-price">${price}</strong>
    <button class="cart-button">Add Cart</button>
    </div>`
}

const renderCarts = (products) => {
    containerProducts.innerHTML += ``    
    products.map(item => {
        containerProducts.innerHTML += cartStructure()(item)
    })
}

const getAllProducts = async () => {

    try {
        const response = await fetch('http://localhost:8000/products')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        } 
        const data = await response.json()
        renderCarts(data)
    }
    catch (error) {
        alert('There has been a problem with your fetch operation: ', error.message)
    }
}

getAllProducts()