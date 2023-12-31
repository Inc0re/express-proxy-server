const express = require('express')
const cors = require('cors')

const app = express()

const corsOptions = {
  origin: '*',
}

app.get('/api/games', cors(corsOptions), async (req, res) => {
  try {
    const response = await fetch('https://www.freetogame.com/api/games')
    const data = await response.json()

    res.json(data)
    console.log('Запрос на получение массива игр обработан')
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.get('/api/games/:id', cors(corsOptions), async (req, res) => {
  try {
    const response = await fetch(
      `https://www.freetogame.com/api/game?id=${req.params.id}`
    )
    const data = await response.json()
    
    res.json(data)
    console.log(`Запрос на игру ${req.params.id} обработан`)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal server error' })
  }
})

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
