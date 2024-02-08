const detailProduct = document.querySelector('#detailProduct')

const getDetailProduct = async () => {
    const url = new URLSearchParams(window.location.search)
    const idProduct = url.get('idproduct')
    try{
        let response = await fetch(`http://localhost:8000/products/${idProduct}`)
        let product = await response.json()
        if(product){
            return product
        }
    }
    catch(error){
        console.log('There has been a problem with your fetch operation: ', error.message)
    }
    
}

const detailProductStructure = () => ({title, image, price, id, description, category}) => {
    return `
                    <div class="col-md-6">
                        <div class="pro-img-details">
                            <img src="${image}" alt="">
                        </div>
                    <div class="pro-img-list">
                        <a href="#">
                            <img src="https://www.bootdey.com/image/115x100/87CEFA/000000" alt="">
                        </a>
                        <a href="#">
                        <img src="https://www.bootdey.com/image/115x100/FF7F50/000000" alt="">
                    </a>
                    <a href="#">
                        <img src="https://www.bootdey.com/image/115x100/20B2AA/000000" alt="">
                    </a>
                    <a href="#">
                        <img src="https://www.bootdey.com/image/120x100/20B2AA/000000" alt="">
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <h4 class="pro-d-title">
                    <a href="#" class="">
                        ${title}
                    </a>
                </h4>
                <p>
                    ${description}
                </p>
                <div class="product_meta">
                    <span class="posted_in"> <strong>Categories:</strong> <a rel="tag" href="#">${category}</a>, <a rel="tag" href="#">Men</a>, <a rel="tag" href="#">Shirts</a>, <a rel="tag" href="#">T-shirt</a>.</span>
                </div>
                <div class="m-bot15"> <strong>Price : </strong> <span class="pro-price"> ${price}</span></div>
                <div class="form-group">
                    <label>Quantity</label>
                    <input type="quantiy" placeholder="1" class="form-control quantity">
                </div>
                <p>
                    <button class="btn btn-round btn-danger" type="button"><i class="fa fa-shopping-cart"></i> Add to Cart</button>
                </p>
            </div>
        </div>`

}

const renderDetailProduct = async (products) => {
    detailProduct.innerHTML += ``
    detailProduct.innerHTML += detailProductStructure()(products)
}

const goBack = () => {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', async () => {
    let product = await getDetailProduct()
    console.log(product)
    renderDetailProduct(product)
})


