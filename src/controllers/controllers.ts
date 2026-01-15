import {RequestHandler} from "express"
import { deleteStudent, 
    updateStudent, 
    getAllStudent, 
    getStudentById, 
    createStudent, 
    updateByPutMethod} from "../services/student"
    import createHttpError from "http-errors"
import { parsePagination } from "../utils/parsePagination"


export const dateLogger: RequestHandler = (req,res,next) => {
    console.log(req.method, req.url)
    next()
}

export const getStudents: RequestHandler = async ( req,res) => {
    const {page, perPage} = parsePagination(req.query)
    const student = await getAllStudent({
        page, 
        perPage
    })
    res.status(200).json({
        message: 'Successfully found students!',
        data: student
    })
}

export const requestGetById: RequestHandler = async (req,res) => {
        const {studentId} = req.params
        const student = await getStudentById(studentId)
        if(!student) {
            throw createHttpError(404, 'Student not found')
        }
        res.status(200).json({
            message: `Successfully found student with id: ${studentId}`,
            data:student
        })
}

export const postStudent: RequestHandler = async (req,res) => {
        const student = await createStudent(req.body)
        res.status(201).json({
            message: `Successfully created a student!`,
            data: student
        }) 
}

export const updateStudentController: RequestHandler = async (req,res) => {
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
}

export const deleteStudentController: RequestHandler =  async (req,res,next) => {
    const {studentId} = req.params
    const student = await deleteStudent(studentId)
    if(!student) {
        next(createHttpError(404, 'Student not found'))
        return
    }
    res.status(204).json({
        message: "Student was successfully deleted",
        data: student
    })
}

export const upsertStudentController: RequestHandler = async (req,res,next) => {
const {studentId} = req.params
const result = await updateByPutMethod(studentId, req.body, {
    upsert: true
})
if(!result) {
    next(createHttpError(404, 'Student not found'))
    return
}
const status = result.isNew ? 201 : 200
res.status(status).json({
    status,
    message: `Successfully upserted a student!`,
    data:result.student
})
}