$(document).ready(() => {
  //   $('.ui.modal')
  //   .modal('show')
  // ;

  
  // $('.ui.longer.modal')
  //   .modal('show')
  // ;
  
  const newEmployeeInput = () => {
    $('.ui.modal').modal('show');
    $('.ui.checkbox').checkbox();

    $("#submit-employee").on("click", () => {

      let newEmployeeData = {};
      newEmployeeData.userName = $('#username').val();
      newEmployeeData.password = $('#password').val();
      newEmployeeData.firstName = $('#first-name').val();
      newEmployeeData.lastName = $('#last-name').val();
      newEmployeeData.equipmentDescription = $('#equipment-description').val();
      newEmployeeData.equipmentNumber = $('#equipment-number').val();
      newEmployeeData.personalVehicle = $('#personal-vehicle').val();

      console.log("LOG DATA:", newEmployeeData);
      // $("#clock-in").removeClass();
      // $("main").addClass("hide");

      fetch("/api/data/user", {
        method: "post",
        body: JSON.stringify(newEmployeeData),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data)
          // const dataDiv = document.createElement("div");
          // $("#test").append(dataDiv);

          // dataDiv.textContent = data.message;
        })
      // clockIn();
      // api.addShift(logData);
    })
  }

  $("#new-employee").click(() => {
    console.log("hello");
    newEmployeeInput();
  })

});
