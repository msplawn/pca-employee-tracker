$(document).ready(() => {
  $('.ui.dropdown')
  .dropdown();

  $('#calendar').calendar().click(() => console.log('word'))
  // ({
  //   type: 'date'
    // formatter: {
    //   dayHeader: () => ({
    //     type: "date",
    //   })
    // }
  // });
    
  const userInput = () => {
    $("#log-submit").on("click", () => {
      
      let logData = {};
      logData.storm = $('#storm-drop').dropdown('get value');
      logData.classification = $('#classification-drop').dropdown('get value');
      logData.workType1 = $('#work1-drop').dropdown('get value');
      logData.workType2 = $('#work2-drop').dropdown('get value');
      logData.workType3 = $('#work3-drop').dropdown('get value');
      logData.workType4 = $('#work4-drop').dropdown('get value');
      logData.start1 = $('#start1-drop').dropdown('get value');
      logData.start2 = $('#start2-drop').dropdown('get value');
      logData.start3 = $('#start3-drop').dropdown('get value');
      logData.start4 = $('#start4-drop').dropdown('get value');
      logData.end1 = $('#end1-drop').dropdown('get value');
      logData.end2 = $('#end2-drop').dropdown('get value');
      logData.end3 = $('#end3-drop').dropdown('get value');
      logData.end4 = $('#end4-drop').dropdown('get value');
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
      // .addShift(logData);
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
  
  
  