require('dotenv').config();
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const postRoutes =  require("./routes/post")
const userRouter = require("./routes/user.js")
const mongoose = require('mongoose')

const app = express()



//MIDDLEAWRE
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/posts', postRoutes);
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000

//MONGODB CONNECTED
mongoose.connect(process.env.MONGO_URL)
.then(() => {app.listen(PORT, console.log(`Server is connected on Port: ${PORT}`))})
.catch((error) => {console.log(error.message)})




