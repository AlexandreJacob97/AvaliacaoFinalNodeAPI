import express from 'express'
import routerCliente from './src/router/cliente.js'
import routerAtendimento from './src/router/atendimento.js'
import database from './src/config/database.js';

const app = express();
app.use(express.json())

app.use("/api/c", routerCliente)
app.use("/api/a", routerAtendimento)

database.db
    .sync({ force: true })
    .then((_) => {
        app.listen(3000, () => {
            console.log("Servidor ouvindo na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })