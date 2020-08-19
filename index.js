//import dependencies yg perlu
const express = require('express');
const path = require('path')
const cors = require('cors')
const app = express()

//router
const apiRouter = require('./routes/api')

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

//define router pada path "/api"
app.use('.api', apiRouter) 
const PORT = process.env.PORT || 4000 //jalan di port 4000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
