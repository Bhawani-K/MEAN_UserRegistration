const express = require('express')
const bodyParser = require('body-parser');

const db = require('./db')

const app = express()
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

db()
.then(()=>{
    console.log('Db Connected successfully..');
    app.listen(PORT, ()=>{
        console.log(`Server started at port ${PORT}`);
    })
})
.catch(err => console.log(err))