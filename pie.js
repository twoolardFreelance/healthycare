var nutritionCanvas, nutritionData, pieChart, chartOptions; 

nutritionData = {
  labels: ["Carbohydrates","Fats","Protein"],
  datasets: [{
    label: "Percent Daily",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    data: [25,40,25]
  }]
};

chartOptions = {
  title: {
    display: true,
    text: 'NUtrition Goal Breakdown',
    fontSize: 30,
    fontColor: "#4E2A84"
  }
};

nutritionCanvas = document.getElementById("pie-chart-a");
pieChart = new Chart(nutritionCanvas, {
  type: 'pie',
  data: nutritionData,
  options: chartOptions
});

nutritionData = {
  labels: ["Carbohydrates","Fats","Protein"],
  datasets: [{
    label: "Percent Daily",
    backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
    data: [20,10,15]
  }]
};

chartOptions = {
  title: {
    display: true,
    text: 'Your current NUtrition Breakdown',
    fontSize: 30,
    fontColor: "#4E2A84"
  }
};

nutritionCanvas = document.getElementById("pie-chart-b"); 
pieChart = new Chart(nutritionCanvas, {
  type: 'pie',
  data: nutritionData,
  options: chartOptions
});





