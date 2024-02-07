const express = require('express')
const cors = require('cors');
require('dotenv').config()
const app = express()
const routerProducts = require('./src/routes/index')

app.disable('x-powered-by')

const PORT = process.env.PORT || 3000

app.use(cors({
    origin: 'http://127.0.0.1:5500'
  }));

app.get('/', (req, res) => {
    res.send('Api is working!')
})


app.use(routerProducts)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})  