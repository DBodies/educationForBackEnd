import { SORT_ORDER } from "../constants";

const parseSortOrder = (sortOrder: string) => {
    const isKnownOrder = [SORT_ORDER.ASC, SORT_ORDER.DESC].includes(sortOrder)
    if(isKnownOrder) return sortOrder
    return SORT_ORDER.ASC
}

const parseSortBy = (sortBy:string) => {
    const keysOfStudent = [
    '_id',
    'name',
    'age',
    'gender',
    'avgMark',
    'onDuty',
    'createdAt',
    'updatedAt',
    ]
    if(keysOfStudent.includes(sortBy)) {
        return sortBy
    }
    return '_id'
}

export type SortQuery = {
    sortOrder?: unknown,
    sortBy?: unknown
}

export const parseSortParams = (query: SortQuery) => {
    const {sortOrder, sortBy} = query
    const parserSortOrder = parseSortOrder(sortOrder as string)
    const parsedSortBy = parseSortBy(sortBy as string)
    return {
        sortOrder: parserSortOrder,
        sortBy: parsedSortBy
    }
}