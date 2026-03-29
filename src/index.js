const express = require('express')
const userRouter = require('./routes/user')
const app = express()

app.use(express.json())
app.use('/users', userRouter)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
