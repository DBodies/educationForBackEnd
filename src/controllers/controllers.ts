import {RequestHandler, ErrorRequestHandler,} from "express"
import { deleteStudent, 
    updateStudent, 
    getAllStudent, 
    getStudentById, 
    createStudent } from "../services/student"

export const dateLogger: RequestHandler = (req,res,next) => {
    console.log(req.method, req.url)
    next()
}

export const getStudents: RequestHandler = async ( req,res,next) => {
try {
    const student = await getAllStudent()
    res.status(200).json({
        data: student
    })
} catch ( error) {
    next(error)
}
}

export const requestGetById: RequestHandler = async (req,res,next) => {
    try {
        const {studentId} = req.params
        const student = await getStudentById(studentId)

        if(!student) {
            return res.status(404).json({
                message: "Student is not found"
            })
        }
        res.status(200).json({
            data:student
        })
    } catch (error) {
        next(error)
    }
}

export const postStudent: RequestHandler = async (req,res,next) => {
    try {
        const {name, age, gender, avgMark, onDuty} = req.body
        const student = await createStudent({name, age, gender, avgMark, onDuty})
        res.status(201).json({
            data: student
        }) 
} catch ( error) {
    next(error)
}
}

export const updateStudentController: RequestHandler = async (req,res,next) => {
try {
    const {studentId} = req.params
    const student = await updateStudent(studentId, req.body)
    if(!student) {
        return res.status(404).json({
            message: 'Can`t update the student'
        })
    }
    res.status(200).json({
        message: "Student was updated",
        data: student
    })
} catch (error) {
    next(error)
}
}

export const deleteStudentController: RequestHandler =  async (req,res,next) => {
try {
    const {studentId} = req.params
    const student = await deleteStudent(studentId)
    if(!student) {
        return res.status(200).json({
            message: 'Student doesn`t  found'
        })
    }
    res.status(200).json({
        message: "Student was successfully deleted",
        data: student
    })
} catch (error) {
    next(error)
}
}

export const errorHandler: ErrorRequestHandler = (err,req,res,next) => {
    res.status(500).json({
        message: 'Something went wrong!!',
        error: err instanceof Error ? err.message : String(err)
    })
}
