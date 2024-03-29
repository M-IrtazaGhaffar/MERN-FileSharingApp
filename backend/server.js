const cors = require('cors')
const bodyParser = require('body-parser')
const express = require('express')
const { router } = require('./routes/route')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))