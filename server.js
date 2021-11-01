const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const bodyParser = require("body-parser"); // linking the body parser

//parser
app.use(bodyParser.urlencoded({extended: false}))
// parser json
app.use(bodyParser.json())
app.get('/', (req, res)=>{
    // this will sends text to browser
    res.send(es.send('Welcome to Data Representation & Querying')//will be displayed on broswer);
})

//everything after the / is a extension to the url
// req = request, res = result
app.get('/hello/:name', (req, res)=>{
    console.log(req.params.name);
    res.send('Hello' + req.params.name)
})

app.get('/api/movies', (req, res)=>{
    // mymovies contains json data from the sheet
    const mymovies =[
        {
        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M
        /MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M
        /MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ]; 
    res.json({movies:mymovies});
});

// routes the browser to the html file
app.get('test', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
})

app.get('/name', (req, res)=>{
    res.send("Hello " + req.query.fname + " "+ req.query.lname)
})

//a post request to connect to the form on the html page
app.post('/name', (req, res)=>{
    res.send('Hello '+req.body.fname + ' ' + req.body.lname);
})
//port routing
app.listen(port, () => {
    console.log('Example app listening at http://localHost:${port}')
})