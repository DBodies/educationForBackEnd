import { PaginationQuery } from "../types/parsedType"


const parseNumber = (value:any, defaultValue: number) => {
    const isString = typeof value === 'string'
    if(!isString) return defaultValue

    const parsedNumber = parseInt(value) 
        if(Number.isNaN(parsedNumber)) {
            return defaultValue
        }
        return parsedNumber
}

export const parsePagination = (query: PaginationQuery) => {
    const {page, perPage} = query

    const parsedPage = parseNumber(page, 1)
    const parsedPerPage = parseNumber(perPage, 10)

    return {
        page: parsedPage,
        perPage: parsedPerPage
    }
}