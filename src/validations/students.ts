import Joi, { any } from "joi"
import { StudentsType } from "../types/studentType"



export const createStudentSchema = Joi.object<StudentsType>({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Username should be a string',
        'string.min': 'Username should have at least {#limit} characters',
        'string.max': 'Username should have at most {#limit} characters',
        'any.required': 'Username is required',
    }),
    age: Joi.number().integer().min(1950).max(2008).required().messages({
        'number.base': 'Age should be a number',
        'number.min': 'Your age should have at least {#limit} ',
        'number.max': 'Your age should have at most {#limit} ',
        'any.required': 'Age is required',
    }),
    gender: Joi.string().valid("male", "female").required().messages({
        "any.only": 'Gender must be either "male" or "female"',
        "any.required": "Gender is required",
        "string.base": "Gender must be a string",
    }),
    avgMark: Joi.number().min(1).max(12).required().messages({
        "number.base": "Average mark must be a number",
        'number.min': 'Your mark should have at least {#limit} ',
        'number.max': 'Your mark should have at most {#limit} ',
        'any.required': "avgMark is required"
    }),
    onDuty: Joi.boolean().valid("true","false" ).required().messages({
        'boolean.base': "onDuty should be 'true' or 'false",
        'any.only': 'onDuty must be either "true" or "false"',
        'any.required': "onDuty is required"
    })
})