
const loggerMiddleware = (req, res, next) => {

    console.log("Logger ran!!!", Date.now());
    
    next(); 
}


export default loggerMiddleware; 