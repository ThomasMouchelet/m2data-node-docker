const express = require('express');
const app = express();
const PORT = 8000;
const mysql = require('mysql')

app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "my-project",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Success to conect mysql database")
})

app.use(function(req, res, next){
    console.log('This is a middleware');
    next();
})

const postsList = [
    {
        id: 1,
        title: 'Post 1',
        content: 'This is the first post'
    }
]

app.get('/', function(req, res){
    res.send('Hello World');
})

// Get all posts
app.get('/posts', function(req, res){
    const sql = "SELECT * FROM post";
    con.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

// Get a single post
app.get('/posts/:id', function(req, res){
    const {id} = req.params;

    con.query("SELECT * FROM post WHERE id = ?", [id], function (err, result) {
        if (err) throw err;
        res.send(result[0]);
    });
})

// Create a new post
app.post('/posts', function(req, res){
    console.log(req.body)

    const data = req.body;

    const sql = "INSERT INTO post SET ? ;";

    con.query(sql, data, function (err, result) {
        if (err) throw err;
        res.send(result);
    });
})

// Delte one posts
app.delete('/posts/:id', function(req, res){
    const {id} = req.params;

    const post = postsList.find(function(post){
        return post.id === parseInt(id);
    })

    const index = postsList.indexOf(post);

    postsList.splice(index, 1);

    res.send('You have reached the delete route');
})

app.listen(PORT, function(){
    console.log(`Example app listening on port ${PORT}!`);
})