const express = require('express')
const categoryRoutes= require("../routes/category.routes")
const billboardRoutes= require("../routes/billboard.routes")
// const movieRoutes= require("../routes/movies.routes")
const cors = require('cors')


const app = express()
app.use(cors())
const port = 4000



app.use(express.json())

app.use(
    categoryRoutes,
    billboardRoutes
    )

app.set("port", process.env.PORT || port)

module.exports= app