const express = require('express')
const bodyparser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const router = require('./routers/router')
const mongo = require('mongoose')
const app = express()

app.use(bodyparser.urlencoded({extended:false}))
app.use(logger('dev'))
app.use(bodyparser.json())
const corsOptions = {
    origin:'http://localhost:3000',
    optionSuccessStatus:200
}
app.use(cors(corsOptions))

mongo.connect('mongodb://localhost:27017/dataserver',{ useNewUrlParser: true } ,()=>{
    console.log("server running")
})

app.use('/',router)


app.listen(3500)