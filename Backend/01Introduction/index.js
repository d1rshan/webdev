const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/about',(req,res) =>{
    res.send('I am Darshan Paccha')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})