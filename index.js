const express = require('express');
const app = express();
const cors = require('cors');
const categories = require('./data/Categories.json')
const port = 5000;

app.use(cors())

app.get('/', (req, res) => {
    res.send('the dragon news')
})


app.get('/categories', (req, res) => {
    res.send(categories)
})



app.listen(port, () => {
    console.log(`listening on port = ${port}`)
})