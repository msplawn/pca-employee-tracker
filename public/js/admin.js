$(document).ready(() => {

  //Populates Storms From Database
  const viewStorms = () => {
    console.log("click")
    $('.storm-container').removeClass('hide');
    $('.employee-container').addClass('hide');

    fetch("/api/data/storm", {
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
        $('#stormsEl').empty();

        data.forEach(storm => {
          console.log(storm.stormName);
  
          const stormContainer = `
        <div class="item">
          <div class="content">
            <div class="header">
              <a class="storm-val" value="${storm._id}">${storm.stormName}</a>
            </div>
              February 2021
          </div>
          <form>
            <i type="submit" value="${storm._id}" class="delete-storm trash alternate outline icon" action="/api/data/storm/${storm._id}"></i>
          </form>
        </div>

        `
          $('#stormsEl').append(stormContainer);
  
        });
      });
  }



  // Attempting to delete storms on icon click
  $(document).on("click", '.delete-storm', (evt) => {
    let oldStormId = evt.currentTarget.parentNode.parentNode.childNodes[1].childNodes[1].childNodes[1].getAttribute("value")
    // oldStorm = oldStorm.replace(/ /g, "-").toLowerCase();
    console.log(oldStormId)
    // console.log($(this).siblings(".content").children(".header").children(".storm-val"))
    fetch(`/api/data/storm/${oldStormId}`, {
      method: "delete",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => location.reload());
  })

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

        })
      // clockIn();
      // api.addShift(logData);
      viewEmployees();

    })
  }
  
  const viewEmployees = () => {
    $('#employee-modal').modal('hide');
    $('.storm-container').addClass('hide');
    $('.employee-container').removeClass('hide');
    

    fetch("/api/user/employees", {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data)
        $('#employeeEl').empty();
        data.forEach(employee => {

          const employeeContainer = `
        <div class="item">
          <div class="content">
            <div class="header">
              ${employee.firstName} ${employee.lastName}
            </div>
              Password: ${employee.password};
          </div>
          <div>
            <a class="storm-val" value="${employee._id}">${employee.username}</a>
            <i value="${employee._id}" class="delete-employee trash alternate outline icon"></i>
          </div>
        </div>
        `
          $('#employeeEl').append(employeeContainer);

        });

        $(".delete-employee").on("click", (evt) => {
          evt.preventDefault();
          const formerEmployeeId = evt.currentTarget.getAttribute("value");
          
          fetch(`/api/user/${formerEmployeeId}`, {
            method: "delete",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(data => {
              // $('.employee-container').innerHTML("");
              viewEmployees();
              // location.reload();
            });
        })
      });
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

          // location.reload();
          $('#storm-modal').modal('hide');

          viewStorms();

        })
    });
  };

  $("#new-employee").click(() => {
    const newEmployee = newEmployeeInput();
    console.log(newEmployee);
  })

  $("#new-storm").click(() => {
    newStormInput();
  })

  $("#view-employees").click(() => viewEmployees());

  $("#view-storms").click(() => viewStorms());

  viewStorms();

});
