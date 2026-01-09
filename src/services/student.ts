import { StudentsCollection} from "../db/models/student";
import { CreateStudentDto, updateStudentDto } from "../types/studentType";

export const getAllStudent = async () => {
    const student = await StudentsCollection.find()
    return student
}

export const getStudentById = async (studentId: string) => {
const studentById = await StudentsCollection.findById(studentId)
return studentById
}

export const createStudent = async (data: CreateStudentDto) => {
    const student = await StudentsCollection.create(data)
    return student
}

export const updateStudent = async(studentId: string, data: updateStudentDto) => {
const result = await StudentsCollection.findByIdAndUpdate(
    studentId,
    data,
    {new: true, runValidators: true}
)
return result
}

export const deleteStudent = async (studentId: string) => {
const student = await StudentsCollection.findByIdAndDelete(
    studentId
)
return student
}