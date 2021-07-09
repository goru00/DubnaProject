const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'admin',
    password: '1234',
    database: 'mfc'
});


app.get("/api/auth", (req, res) => {
    const insertSQL = "INSERT INTO Users VALUES (?, ?);"
    db.query(insertSQL, [login, pass], (err, result) => {});
});

app.listen(3001, () => {
    console.log('RUN');
});
