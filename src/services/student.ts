import { StudentsCollection} from "../db/models/student";
import { CreateStudentDto } from "../types/studentType";

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

// const getRandomMark = (min: number, max: number): number => {
// return Math.floor(Math.random() * (max - min) + min)
// }
// export const createStudent = async (data:Omit<CreateStudentDto, "avgMark">) => {
//     const student = await StudentsCollection.create({
//         ...data,
//         avgMark:getRandomMark(1, 12)
//     })
//     return student
// }
type updateStudentDto = Partial<Omit<CreateStudentDto, "_id">>
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