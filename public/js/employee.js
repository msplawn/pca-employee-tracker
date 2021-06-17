$(document).ready(() => {
  console.log("hello")
  $('.ui.dropdown')
    .dropdown();

  $("#log-submit").on("click", () => {
    let logData = {};
    logData.storm = $('#storm-drop').dropdown('get value');
    logData.classification = $('#classification-drop').dropdown('get value');
    logData.workType = $('#work-drop').dropdown('get value');
    logData.startTime = $('#start-drop').dropdown('get value');
    logData.endTime = $('#end-drop').dropdown('get value');
    logData.utilityMeals = $('#utility-meal-drop').dropdown('get value');
    logData.perDiemMeals = $('#per-diem-meal-drop').dropdown('get value');

    console.log(logData);
  })
})