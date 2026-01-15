import {RequestHandler} from "express"
import createHttpError from "http-errors"
import { ObjectSchema } from "joi"


export const validateBody = (schema:ObjectSchema ): RequestHandler => async (req,res,next) => {
    try {
        await schema.validateAsync(req.body, 
            {abortEarly:false})
            next()
    } catch(err:any) {
        const errors = createHttpError(400,'Bad request', {
            errors: err.details
        })
        next(errors)
    }
}
