require('dotenv').config();
const express = require('express');
const app = express();
const WSserver = require('express-ws')(app);
const aWss = WSserver.getWss();
const sequelize = require('./db/db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const models = require('./src/models/models.js');
const PORT = process.env.PORT || 3001;
const router = require('./src/routes/index.js');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}))
app.use('/api', router);

app.ws('/', (ws, req) => {
    console.log('connection established')
    ws.on('message', (msg) => {
        msg = JSON.parse(msg)
        switch (msg.method) {
            case 'connection' :
                connectionHandler(ws, msg)
                break
            case 'newMessage':
                newMessageHandler(ws, msg)
                break
        }
    })
})

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

const connectionHandler = (ws, msg) => {
    let sessionId = null
    msg.user1Id < msg.user2Id ? sessionId = msg.user1Id + '-' + msg.user2Id : sessionId = msg.user2Id + '-' + msg.user1Id
    ws.id = sessionId
    newMessageHandler(ws, msg)
}

const newMessageHandler = (ws, msg) => {
    let sessionId = null
    msg.user1Id < msg.user2Id ? sessionId = msg.user1Id + '-' + msg.user2Id : sessionId = msg.user2Id + '-' + msg.user1Id
    aWss.clients.forEach(client => {
        if (client.id === sessionId) {
        client.send(JSON.stringify(msg))
        }
    })
}
