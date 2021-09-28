// const bcrypt = require("bcrypt")

$("#submit").on("click", () => {
    const username = $("#username").val();
    const password = $("#password").val();

    const data = { username: username, password: password };
    console.log(username, password);


    fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    }).then(response => response.json()
    ).then((res) => {
      console.log(res);
        window.location.href = "/employee";
    });

})