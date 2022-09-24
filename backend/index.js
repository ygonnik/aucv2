require('dotenv').config();
const express = require('express');
const sequelize = require('./db/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const models = require('./src/models/models.js');
const PORT = process.env.PORT || 3001;
const router = require('./src/routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}))
app.use('/api', router);

app.use(errorHandler);
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


