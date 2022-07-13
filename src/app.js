

const express = require('express')
const app = express()
const port = 3000





  app.get('/', (req, res) => {
    res.send('"JE SUIS UNE PUTAIN DE GENIE! "Le mechant dans Golden Eye.')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port sa mere ${port}`)
  }
  )


// Language: javascript