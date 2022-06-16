const express = require('express')
const app = express()
const { default: mongoose } = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth.js')
const userRoute = require('./routes/user.js')

dotenv.config()


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DBConnection Succesfull"))
    .catch((err) =>
    {
        console.log(err)
    })

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)

app.listen(process.env.PORT || 5000, () =>
{
    console.log("server is running on PORT 5000")
})