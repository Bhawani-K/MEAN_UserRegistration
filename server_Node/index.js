const express = require('express')
const bodyParser = require('body-parser');

const db = require('./db')
const routes = require('./controllers/index')
const app = express()
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/api/v1/', routes)

db()
.then(()=>{
    console.log('Db Connected successfully..');
    app.listen(PORT, ()=>{
        console.log(`Server started at port ${PORT}`);
    })
})
.catch(err => console.log(err))