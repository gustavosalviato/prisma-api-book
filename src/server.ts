import 'express-async-errors'
import express, { NextFunction, Request, response, Response } from "express";
import { mainRoutes } from './routes/index'
import { AppError } from "./errors/AppError";


const app = express()

app.use(express.json())

app.use(mainRoutes)

app.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                status: 'error',
                message: err.message
            })

        }

        return response.status(500).json({
            status: 'error',
            message: `Internal server error - ${err.message}`
        })
    })

app.listen(3333, () => console.log('Server is runnig in port 3333 🤖'))
