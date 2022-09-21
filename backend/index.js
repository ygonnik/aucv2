const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const userRouter = require("./src/routes/userRouter.js");
const homeRouter = require("./src/routes/homeRouter.js");


app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found");
});

app.listen(PORT, function() {   
    console.log('listening on port ' + PORT);
});

