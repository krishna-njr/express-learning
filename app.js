import express from 'express'

const app = express(); 

const PORT = process.env.PORT || 8000; 



app.all('/all', (req, res) => {
    console.log(`Routes for All Methods.`); 
    res.send({data: "All Route data"})
}  )


app.listen(PORT, () => {
    console.log(`server is up in running on ${PORT}`)
})