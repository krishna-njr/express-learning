import express from 'express'
import { error } from 'node:console';
import validate from './middleware/validate.middleware.js'
import loggerMiddleware from './middleware/logger.middleware.js';
import errorHandler from './middleware/error.middleware.js';
import cookieParser from 'cookie-parser';



const app = express(); 


const PORT = process.env.PORT || 8000; 

// const middleware1 = (req, res,

// buitt in middleware : 
app.use(express.json())

// third party middleware : 
app.use(cookieParser()); 
// application level middleware : 
app.use(loggerMiddleware); 


// route level middleware : 
app.get('/admin', validate, (req, res) => {
    console.log("Only Admin"); 
    res.send("access allowed")
})
app.all('/all', (req, res) => {
    console.log(`Routes for All Methods.`); 
    res.send({data: "All Route data"})
}  )







app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`server is up in running on ${PORT}`)
})