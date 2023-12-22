interface ResponseT<T = any> {
    data:T
}

type ErrorType = {
    config:string
    response?: ResponseT
}

const error : ErrorType = {
    config: 'test',
}


const isExist = error.response?.data.message !== undefined

console.log(isExist)