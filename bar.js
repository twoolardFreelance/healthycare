var progressCanvas = document.getElementById("bar-chart");

var carbData = {
  label: "Carbohydrate Intake (g)",
  data: [276, 368, 303, 224, 323, 289, 205],
  backgroundColor: "#3e95cd"
};

var fatsData = {
  label: "Fat intake (g)",
  data: [46, 53, 44, 75, 69, 52, 34],
  backgroundColor: "#8e5ea2"
};

var proteinData = {
  label: "Protein Intake (g)",
  data: [47, 58, 22, 45, 54, 64, 43],
  backgroundColor: "#3cba9f"
};

var chartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ],
  datasets: [fatsData, proteinData, carbData]
};

var chartOptions = {
  scales: {
    xAxes: [
      {
        barPercentage: 1,
        categoryPercentage: 0.6
      }
    ],
    yAxes: [
      {
      display: false
      }
    /*
      {
        id: "y-axis-fat",
        ticks: {
          beginAtZero: true
        },
        display: true 
      },
      {
        id: "y-axis-protein",
        ticks: {
          beginAtZero: true
        },
        display: false
      },
      {
        id: "y-axis-carbohydrate",
        ticks: {
          beginAtZero: true
        },
        dispay: false
      }
    */
    ]
  },
  title: {
    display: true,
    text: 'Your Progress',
    fontSize: 30,
    fontColor: "#4E2A84"
  }
};

var barChart = new Chart(progressCanvas, {
  type: "bar",
  data: chartData,
  options: chartOptions
});
