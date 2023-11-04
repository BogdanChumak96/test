const express = require('express')
const PORT = process.env.PORT || 5000
const mongoose = require('mongoose');
const authroute = require('./authroute')
const controller = require('./authcontroller')
const app = express()

app.use(express.json())
app.use("./auth", authroute)
const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://barbuhtimofej:yAvxttrOp6mcE3DF@cluster0.fjaolyc.mongodb.net/project')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()