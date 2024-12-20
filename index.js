const express = require('express')
const cors = require('cors')
require('dotenv').config()
const connectDB = require('../backend/config/db')
//const router= require('./routes')
const router = express.Router();

const app = express()
app.use(cors())
app.use("/api",router)

const PORT = 8080 || process.env.PORT
connectDB().then(()=> {
    app.listen(PORT,()=>{
        console.log("**** Server is running ****")
        console.log('*^_^* connect to DB *^_^*')
        console.log("keep going *^_^* ")
    })

}
)

