

const errorHandler = (err, req, res, next) => {

    console.log('Error : ', err.stack)

    let statusCode = err.statusCode || 5000; 
    let message = err.message || 'Internal server error'; 

    return res.status(statusCode).json({
        status: false, 
        message: message, 

    })
}


export default errorHandler; 