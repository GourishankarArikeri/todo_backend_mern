const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const UserRoute = require("./Routes/UserRoutes")

const TodoRoute = require("./Routes/TodoRoute")
const app = express()

app.use(express.json())
app.use(cors())

const connection = async() => {
    try {
       const connect = await mongoose.connect("mongodb+srv://arikerig:12344321@cluster0.9ee9sok.mongodb.net/goutama")
    } catch (error) {
        console.log("bad connection")
    }

}
connection()


app.use("/api/user" , UserRoute)
app.use("/api/todo" , TodoRoute)

app.listen(4000 , ()=>{
    console.log("server is online")
})