import { ErrorRequestHandler } from "express"
import { HttpError } from "http-errors"

export const errorHandler: ErrorRequestHandler = (err,req,res,next) => {
    if(err instanceof HttpError) {
        res.status(err.status).json({
            status: err.message,
            message: err.name,
            data:err
        })
        return
    }
    res.status(500).json({
        status: 500,
        message: 'Something went wrong',
        data: err.message
    })
}
