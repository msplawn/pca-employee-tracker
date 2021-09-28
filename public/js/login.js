const bcrypt = require("bcrypt")

$("#submit").on("click", () => {
    const username = $("#username").val();
    const password = $("#password").val();

    console.log(username, password);

    fetch("/api/user/login", (req, res, ))
    .then(res => {
        console.log(res);
    })
})