import express from 'express'


const app = express();


app.get('/',(req,res) =>{
    res.json({
        message:"Started"
    })
})

app.listen(8080, () =>{
    console.log('server started!')
})