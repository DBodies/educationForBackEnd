import { StudentsCollection} from "../db/models/student";
import { PaginationOptions } from "../types/parsedType";
import { CreateStudentDto, updateStudentDto } from "../types/studentType";
import { Types } from "mongoose";
import { calculatePaginationData } from "../utils/calculatePaginationsData";

export const getAllStudent = async ({page, perPage}: PaginationOptions) => {
    const limit = perPage
    const skip = (page - 1) * perPage

    const studentsQuery = StudentsCollection.find()
    const studentsCount = await StudentsCollection.find()
    .merge(studentsQuery)
    .countDocuments()

    const student = await studentsQuery.skip(skip).limit(limit).exec()
    const paginationData = calculatePaginationData(studentsCount, perPage, page)
    return {
        data: student,
        ...paginationData
    }
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