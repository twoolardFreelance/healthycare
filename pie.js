new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Carbohydrates","Fats","Protein"],
      datasets: [{
        label: "Percent Daily",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f"],
        data: [35,40,25]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'NUtrition Breakdown',
        fontSize: 30,
        fontColor: "#4E2A84"
      }
    }
});


