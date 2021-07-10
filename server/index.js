const express = require('express');
const app = express();
const db = require('./models');
const { Users } = require('./models');

const bcrypt = require('bcrypt');
const cookie = require('cookie-parser');

const { createToken, validateToken } = require('./JWT');

app.use(express.json());
app.use(cookie());

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await Users.findOne({ where: {username} });
    if (!user) res.status(400).json({ error: "Такого пользователя не существует!"});

    const dbPass = user.password;
    bcrypt.compare(password, dbPass).then((match) => {
        if (!match) {
            res.status(400).json({error: "Неправильно введен логин или пароль пользователя!"});
        } else {
            const accessToken = createToken(user);
            res.cookie("access-token", accessToken, {
                maxAge: 60 * 60 * 24 * 30 * 1000,
                httpOnly: true,
            });
            res.json("LOGIN!");
        }
    });
});

app.get("/profile", validateToken, (req, res) => {
    res.json("profile");
});
  
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
      console.log("SERVER RUNNING ON PORT 3001");
    });
});