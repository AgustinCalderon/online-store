const $ = document;
const containerProducts = $.querySelector('#containerProducts') 

fetch('http://localhost:8000/products')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
