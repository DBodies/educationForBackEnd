import express from 'express';
import pino from 'pino-http'
import cors from 'cors'
import dotenv from 'dotenv'
import { getEnvVar } from './utils/getEnvVar';
import StudentRouter from './routers/student.ts'
import { dateLogger } from './controllers/controllers';
import { errorHandler } from './middlewares/errorHandler.ts';
import { routeNotFound } from './middlewares/notFoundHandler.ts';

dotenv.config()
const PORT = Number(getEnvVar('PORT', "4561"))
export const startServer = () => {
const app = express()

app.use(express.json())
app.use(cors())
app.use(
  pino({
    transport: {
      target: 'pino-pretty',
    },
  }),
);

app.use(dateLogger)

app.use(StudentRouter)

app.use("/",routeNotFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})
}
