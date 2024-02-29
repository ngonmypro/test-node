const express = require('express')
const app = express()
const config = require('../config/config')

app.get('/', (req, res) => {
    res.send('Nguan test ' + config.PORT)
})

app.listen(config.PORT, () => {
    console.log(`Example app listening on port ${config.PORT}`)
  })