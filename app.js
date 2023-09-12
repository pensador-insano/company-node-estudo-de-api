const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Prazer Insanos')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// https://expressjs.com/pt-br/starter/hello-world.html