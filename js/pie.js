var nutritionCanvas_a, nutritionData_a, pieChart_a, chartOptions_a; 
var nutritionCanvas_b, nutritionData_b, pieChart_b, chartOptions_b; 

nutritionData_a = {
  labels: ["Carbohydrates (%DI)","Fats (%DI)","Protein (%DI)"],
  datasets: [{
    label: "Percent Daily",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    data: [25,40,25]
  }]
};

chartOptions_a = {
  title: {
    display: true,
    text: 'Goal Breakdown',
    fontSize: 32,
    fontColor: "#4E2A84"
  }
};

nutritionData_b = {
  labels: ["Carbohydrates (%DI)","Fats (%DI)","Protein (%DI)"],
  datasets: [{
    label: "Percent Daily",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    data: [20,10,15]
  }]
};

chartOptions_b = {
  title: {
    display: true,
    text: 'Current Breakdown',
    fontSize: 32,
    fontColor: "#4E2A84"
  }
};

window.onload = function() {

  nutritionCanvas_a = document.getElementById("pie-chart-a");
  pieChart_a = new Chart(nutritionCanvas_a, {
    type: 'pie',
    data: nutritionData_a,
    options: chartOptions_a
  });
  
  nutritionCanvas_b = document.getElementById("pie-chart-b"); 
    pieChart_b = new Chart(nutritionCanvas_b, {
      type: 'pie',
      data: nutritionData_b,
      options: chartOptions_b
    });
  
}





