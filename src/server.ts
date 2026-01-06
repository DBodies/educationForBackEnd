import express, { NextFunction, Response, Request, RequestHandler, ErrorRequestHandler} from 'express';
import pino from 'pino-http'
import cors from 'cors'

const PORT = 4561

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

app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})

app.get('/', (req,res) => {
    res.json({
        message: "Hello world"
    })
})

const dateLogger: RequestHandler = (req,res,next) => {
    console.log(req.method, req.url)
    next()
}
app.use(dateLogger)

app.use("/", (req: Request,res: Response) => {
    res.status(404).json({
        message: "Route not found!"
    })
})
const errorHandler: ErrorRequestHandler = (err,req,res,next) => {
    res.status(500).json({
        message: 'Something went wrong!!',
        error: err instanceof Error ? err.message : String(err)
    })
}
app.use(errorHandler)
// app.use((err: unknown,req: Request,res: Response,next: NextFunction) => {
//     res.status(500).json({
//         message: 'Something went wrong',
//         error: err instanceof Error ? err.message : String(err)
//     })
// })
}
startServer()