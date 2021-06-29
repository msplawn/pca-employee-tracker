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
      newEmployeeData.username = $('#username').val();
      newEmployeeData.password = $('#password').val();
      newEmployeeData.firstName = $('#first-name').val();
      newEmployeeData.lastName = $('#last-name').val();
      newEmployeeData.equipmentDescription = $('#equipment-description').val();
      newEmployeeData.equipmentNumber = $('#equipment-number').val();

      if ($('#personal-vehicle').val() === "on") {
        newEmployeeData.personalVehicle = true
      } else {
        console.log("FAILUREEEEE")
      }

      console.log("LOG DATA:", newEmployeeData);
      // $("#clock-in").removeClass();
      // $("main").addClass("hide");

      fetch("/api/user/new", {
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

  const newStormInput = () => {
    $('#storm-modal').modal('show');

    $("#submit-storm").on("click", () => {

      let newStormData = {};
      newStormData.stormName = $('#storm-name').val();
      newStormData.utilityName = $('#utility-name').val();
      newStormData.supervisor = $('#supervisor-name').val();
      newStormData.teamLeader = $('#team-leader-name').val();
   
      console.log(newStormData);

      fetch("/api/data/storm" , {
        method: "post",
        body: JSON.stringify(newStormData),
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
    });
  };

  $("#new-employee").click(() => {
    newEmployeeInput();
  })

  $("#new-storm").click(() => {
    console.log("hello");
    newStormInput();
  })

});
