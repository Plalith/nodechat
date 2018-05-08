var socket = io();

socket.on('connect', function () {
    console.log("hey some one came");

    socket.emit('createEmail', {
        to :"jenefa@resultanlyz.com",
        from:"bannu@gmail.com",
        text:"hi jennu how r u doing hope every this is fine"
    })
});

socket.on('disconnect', function () {
    console.log("disconnected from server");
});

socket.on('newEmail', function (email) {
    console.log("new email", email);
})