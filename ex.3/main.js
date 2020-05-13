$(document).ready(function() {

  function getMonthsList() {
    var months = [];
    for (var i = 0; i < 12; i++) {
      months.push(moment.months(i));
    }
    return months;
  };

  function ajaxCall() {

    $.ajax({
      url: "server.php",
      success: function(data){
        var ctx = $('#myChart');
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: getMonthsList(),
                datasets: [{
                    label: 'Vendite',
                    data: data.monthlySales,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        var ctx = $('#myPieChart');
        var myChart = new Chart(ctx, {
            type: "pie",
            data: {
                labels: data.name,
                datasets: [{
                    label: 'Vendite',
                    data: data.value,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        var ctx = $('#tripleLineChart');
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                  labels: getMonthsList(),
                  datasets: [{
                    // team 1 ------------------------------------
                      label: data.teamLabels[0],
                      data: data.Team1,
                      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                      borderColor: ['rgba(255, 99, 132, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 2 ------------------------------------
                      label: data.teamLabels[1],
                      data: data.Team2,
                      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                      borderColor: ['rgba(54, 162, 235, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 3 ------------------------------------
                      label: data.teamLabels[2],
                      data: data.Team3,
                      backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                      borderColor: ['rgba(255, 206, 86, 1)'],
                      borderWidth: 1
                    }
                  ]
              }, // fine multiple function data
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
      }
    }); // fine della chiamata ajax
  } // fine della funzione ajax call

  function printChart() {
    ajaxCall();
  } // fine della function che disegna il grafico

  printChart();
});
