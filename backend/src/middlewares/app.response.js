function okResponse(isFalse = false, message = '', body = []) {
    return {
        status: !isFalse,
        ...body.length > 0 ? { content: body } : {},
        message: message || ok
    }
}

function badRequestResponse(message) {
    return {
        status: false,
        message: message || 'Bad request, check your infos or contact an administrator.'
    }
}

function notFoundResponse(message) {
    return {
        status: false,
        message: message || 'This endpoint does not exist'
    }
}

function internalServerErrorResponse(req, res) {
    return {
        status: false,
        message: message || 'Internal server error, contact an administrator.'
    }
}

export function handleResponseType(req, res) {
    const responserService = {
        'OK': okResponse,
        'BAD_REQUEST': badRequestResponse,
        'NOT_FOUND': notFoundResponse,
        'INTERNAL_SERVER_ERROR': internalServerErrorResponse
    }

    const toReturn = responserService[req.templateToReturn]()

    res.status(toReturn.statusCode).send(toReturn.resJson)
}