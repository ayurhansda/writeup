var express = require('express');
var router = express.Router();
var database = require('../database');

router.post('/signup', (req, res) => {
    const {name, email, password} = req.body;
    const query = `insert into users (name, email, password) values (?, ?, ?)`;
    database.query(query, [name, email, password], (err, result) => {
        if(err){
            console.log(err);   
        }
        else{
            res.status(200).send('User registered Successfully');
        }
    });
});

router.post('/signin', (req, res) => {
    const {email, password} = req.body;
    const query = `select * from users where email = ? and password = ?`;
    database.query(query, [email, password], (err, result) => {
        if (err){
            console.log(err);
        }
        else if (result.length > 0) {
            res.status(200).send('Signin Successfull!');
        }
        else{
            res.status(401).send('Invalid email or password');
        }
    });
});

module.exports = router;