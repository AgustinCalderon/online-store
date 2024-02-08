const $ = document;
const containerProducts = $.querySelector('#containerProducts') 

const cardStructure = () => ({title, image, price, id}) => {
    return `<div class="card" id="${id}">
    <img class="card-img" src="${image}">
    <a class="card-title">${title}</a>
    <strong class="card-price">$${price}</strong>
    </div>`
}

const renderCards = (products) => {
    containerProducts.innerHTML += ``    
    products.map(item => {
        containerProducts.innerHTML += cardStructure()(item)
    })
}

const getAllProducts = async () => {

    try {
        const response = await fetch('http://localhost:8000/products')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        } 
        const data = await response.json()
        console.log(data)
        renderCards(data)
    }
    catch (error) {
        alert('There has been a problem with your fetch operation: ', error.message)
    }
}

const handleDetailCard = (id) => {
    window.location.href = `../src/pages/detail.html?idproduct=${id}`
}

const addClickDetailCard = () => {
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => card.addEventListener('click', (evento) => {
        handleDetailCard(evento.target.id)
    }))
}

document.addEventListener('DOMContentLoaded', async () => {
    await getAllProducts()
    addClickDetailCard()
})