const express = require('express')

const app = express()

const Port = 8080

const server = app.listen(Port, () => {
    console.log(`El server esta en funcionamiento en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en el server ${error}`))

app.get 