$(document).ready(() => {
  $('.ui.dropdown')
  .dropdown();
  
  const userInput = () => {
    $("#log-submit").on("click", () => {
      
      let logData = {};
      logData.storm = $('#storm-drop').dropdown('get value');
      logData.classification = $('#classification-drop').dropdown('get value');
      logData.workType = $('#work-drop').dropdown('get value');
      logData.start = $('#start-drop').dropdown('get value');
      logData.end = $('#end-drop').dropdown('get value');
      logData.utilityMeals = $('#utility-meal-drop').dropdown('get value');
      logData.perDiemMeals = $('#per-diem-meal-drop').dropdown('get value');
      // logData.userId = 
      
      console.log("LOG DATA:", logData);
      $("#clock-in").removeClass();
      $("main").addClass("hide");

      fetch("/api/data/shift", {
        method: "post",
        body: JSON.stringify(logData),
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
        const dataDiv = document.createElement("div");
        $("#test").append(dataDiv);
        
        dataDiv.textContent = data.message;
      })
      // clockIn();
      .addShift(logData);
    })
  }
  
  // const clockIn = () => {
  //   console.log("clocked in")
  //   $("#clock-out-btn").on("click", () => {
  //     $("#clock-in").addClass("hide");
  //     $("#clock-out").removeClass("hide");
  //     clockOut();
  //     // $("#clock-in").addClass("hide");
  //     // api.addShift(logData);
  //   })
  // }
  
  // const clockOut = () => {
  //   console.log("clocked out")
  //   $("#return-home").on("click", () => {
  //     $("#clock-out").addClass("hide");
  //     $("main").removeClass("hide");
  //     userInput();
  //   })
  // }
  userInput();
  
  });
  
  
  