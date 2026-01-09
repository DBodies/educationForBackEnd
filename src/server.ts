import express, {Response, Request} from 'express';
import pino from 'pino-http'
import cors from 'cors'
import dotenv from 'dotenv'
import { getEnvVar } from './utils/getEnvVar';
import { deleteStudentController,
    updateStudentController, 
    postStudent, 
    getStudents, 
    dateLogger, 
    requestGetById,
    errorHandler, 
    routeNotFound} from './controllers/controllers';

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
app.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`)
})

app.get("/students", getStudents)

app.use(dateLogger)

app.get("/students/:studentId", requestGetById)

app.post('/createStudent', postStudent)

app.patch('/updateStudent/:studentId', updateStudentController)

app.delete('/deleteStudent/:studentId', deleteStudentController)

app.use("/",routeNotFound)

// app.use((err: unknown,req: Request,res: Response,next: NextFunction) => {
//     res.status(500).json({
//         message: 'Something went wrong',
//         error: err instanceof Error ? err.message : String(err)
//     })
// })
}
