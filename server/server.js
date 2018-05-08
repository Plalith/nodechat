const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicpath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var  server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicpath));


io.on('connection', (socket)=>{
    console.log("hi there new user connected");

    socket.emit("newEmail", {
        from:"Lalith889@gmail.com",
        text:"hi Lalith this is your first email",
        createdat:"08/05/18"
    });

    socket.on('createEmail', (newEmail)=>{
        console.log('createEmail', newEmail);
    });

    socket.on('disconnect', ()=>{
    console.log("user disconnected");
    });
});


server.listen(port, ()=>{
    console.log(`Server is up on ${port}`);
})
