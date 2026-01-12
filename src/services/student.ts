import { StudentsCollection} from "../db/models/student";
import { CreateStudentDto, updateStudentDto } from "../types/studentType";
import { Types } from "mongoose";

export const getAllStudent = async () => {
    const student = await StudentsCollection.find()
    return student
}

export const getStudentById = async (studentId: string | Types.ObjectId) => {
const studentById = await StudentsCollection.findById(studentId)
return studentById
}

export const createStudent = async (data: CreateStudentDto) => {
    const student = await StudentsCollection.create(data)
    return student
}

export const updateStudent = async(studentId: string | Types.ObjectId, data: updateStudentDto) => {
const result = await StudentsCollection.findByIdAndUpdate(
    studentId,
    data,
    {new: true, runValidators: true}
)
return result
}

export const deleteStudent = async (studentId: string | Types.ObjectId) => {
const student = await StudentsCollection.findByIdAndDelete(
    studentId
)
return student
}

export const updateByPutMethod = async (studentId:string | Types.ObjectId, data:updateStudentDto, options = {}) => {
    const rawResult = await StudentsCollection.findOneAndUpdate(
        {_id: studentId},
        data,
        {
            new: true,
            includeResultMetadata: true,
            ...options
        }
    )
    if(!rawResult || !rawResult.value) return null
    return {
        student: rawResult.value,
        isNew:Boolean(rawResult?.lastErrorObject?.upserted)
    }
}