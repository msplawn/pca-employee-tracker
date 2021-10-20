$(document).ready(() => {

  //Populates Storms From Database
  fetch("/api/data/storms", {
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
            <a class="storm-val" value="${storm._id}">${storm.stormName}</a>
          </div>
            February 2021
        </div>
        <div>
          <i value="${storm._id}" class="delete-storm trash alternate outline icon"></i>
        </div>
      </div>
      `
        $('#stormsEl').append(stormContainer);

      });
    });



  // Attempting to delete storms on icon click
  $(document).on("click", '.delete-storm', (evt) => {
    evt.preventDefault();
    console.log(evt.target)
    // console.log($(this).siblings(".content").children(".header").children(".storm-val"))
    fetch("/api/shift/storm:stormId", {
      method: "delete",
      // body: JSON.stringify(newEmployeeData),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log("hiiii")
        return response.json();
      })
      .then(data => {
        console.log(data)
      })
  })


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
        newEmployeeData.personalVehicle = false
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
          console.log("data._id");
        })
      // clockIn();
      // api.addShift(logData);
    })
  }
  
  $(document).on("click", ".delete-employee", evt => {
    console.log("hello")
    // let employeeId = 
  })

  const newStormInput = () => {
    $('#storm-modal').modal('show');

    $("#submit-storm").on("click", () => {

      let newStormData = {};
      newStormData.empty();
      newStormData.stormName = $('#storm-name').val();
      newStormData.utilityName = $('#utility-name').val();
      newStormData.supervisor = $('#supervisor-name').val();
      newStormData.teamLeader = $('#team-leader-name').val();

      console.log(newStormData);

      fetch("/api/data/storm", {
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
    const newEmployee = newEmployeeInput();
    console.log(newEmployee);
  })

  $("#new-storm").click(() => {
    console.log("hello");
    newStormInput();
  })

});
