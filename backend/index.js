require('dotenv').config();
const express = require('express');
const sequelize = require('./db/db');
const models = require('./src/models/models.js');
const PORT = process.env.PORT || 3001;
const app = express();
const userRouter = require("./src/routes/userRouter.js");
const homeRouter = require("./src/routes/homeRouter.js");



app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

const start = async function() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, function() {   
            console.log('listening on port ' + PORT);
        });
    } catch (err) {
        console.log(err);
    }
}

start();


