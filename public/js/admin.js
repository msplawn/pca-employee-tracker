$(document).ready(() => {

  //Populates Storms From Database
  fetch("/api/data/storms" , {
    method: "get",
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
    data.forEach(storm => {
      console.log(storm.stormName);
      
      const stormContainer = `
      <div class="item">
        <i class="file alternative outline icon"></i>
        <div class="content">
          <div class="header">
            <a>${storm.stormName}</a>
          </div>
            February 2021
        </div>
        <i class="trash alternate outline icon" id="delete-storm"></i>
      </div>
      `
      $('#stormsEl').append(stormContainer);

    });
    // Attempting to delete storms on icon click
      $('#delete-storm').on("click", () => {
        console.log("Trash")
        fetch("/api/shift/storm:stormId", {
          method: "delete",
          // body: JSON.stringify(newEmployeeData),
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
          })
      })
  });

  //   $('.ui.modal')
  //   .modal('show')
  // ;

  
  // $('.ui.longer.modal')
  //   .modal('show')
  // ;
  
  const newEmployeeInput = () => {
    $('#employee-modal').modal('show');
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
        location.reload();
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
