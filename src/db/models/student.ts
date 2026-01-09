import { Schema, model } from "mongoose";

type StudentsType = {
  name: string,
  age: number,
  gender: 'male' | 'female' | 'other',
  avgMark: number,
  onDuty: boolean
}

const studentsSchema = new Schema<StudentsType>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    avgMark: {
      type: Number,
      required: true,
    },
    onDuty: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const StudentsCollection = model<StudentsType>(  
  "Student",
  studentsSchema,
  "studentEducation")
