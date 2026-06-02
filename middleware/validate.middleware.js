
const validate = (req, res, next) => {
    const authHeader = req.headers.authorization
    if(!authHeader){
        const error = new Error('You are not allowed to access this'); 
        error.statusCode = 403; 
        error.message = "Forbidden"; 

        // return res.status(403).send({status: false, message : 'you are not allowed to access.'})

        return next(error); 
    } 
    console.log(authHeader)
    next(); 
}

export default validate