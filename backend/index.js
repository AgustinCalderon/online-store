const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express()
const routerProducts = require('./src/routes/index')

app.disable('x-powered-by')

const PORT = process.env.PORT || 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('Api is working!')
})


app.use(routerProducts)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})  