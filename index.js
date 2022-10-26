const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')
const courses = require('./data/courses.json')


app.use(cors())

app.get('/', (req, res)=>{
    res.send('hello prithibi')
})


app.get('/courses', (req,res)=>{
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    const id = req.params.id;
    const selected = courses.find(cource=> cource.id === id)
    res.send(selected)
})



app.listen(port, ()=>{
    console.log('Port running on', port);
})

module.exports = app;
