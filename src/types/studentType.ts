export type CreateStudentDto = {
  name: string;
  age: number;
  gender: string;
  avgMark: number;
  onDuty: boolean;
} 
export type updateStudentDto = Partial<Omit<CreateStudentDto, "_id">>

export type StudentsType = {
  name: string,
  age: number,
  gender: 'male' | 'female' | 'other',
  avgMark: number,
  onDuty: boolean
}