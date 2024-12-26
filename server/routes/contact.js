var express = require('express');
var router = express.Router();
var database = require('../database');

router.post('/submit', function (req, res) {
    console.log('Form data received:', req.body);
    
    const { st_name, st_email, st_subject, st_message } = req.body;

    if (!st_name || !st_email || !st_subject || !st_message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    var query = `insert into data (st_name, st_email, st_subject, st_message) VALUES (?, ?, ?, ?)`;
    database.query(query, [st_name, st_email, st_subject, st_message], function (error) {
        if (error) {
            console.error("Error saving data:", error);
            return res.status(500).json({ error: "Database error" });
        }
        res.json({ message: "Data saved successfully" });
    });
});

module.exports = router;
