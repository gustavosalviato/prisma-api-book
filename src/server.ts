import express from "express";
import { mainRoutes } from './routes/index'


const app = express()

app.use(express.json())

app.use(mainRoutes)

app.listen(3333, () => console.log('Server is runnig in port 3333 🤖'))
