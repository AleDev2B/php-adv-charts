$(document).ready(function() {

  function getMonthsList() {
    return moment.months();
  };

  function printChart(data,idCanvas,typeChart,labelsVal,listType) {
    var ctx = idCanvas;
    var myChart = new Chart(ctx, {
        type: typeChart,
        data: {
            labels: labelsVal,
            datasets: [{
                label: 'Vendite',
                data: listType,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
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
  }

  function fatturatoCall(idCanvas) {
    $.ajax({
      url: "server.php",
      data: {
        level: "guest"
      },
      success: function(data){
        printChart(data,idCanvas,data.fatturato.type,getMonthsList(),data.fatturato.data);
      }
    });
  }

  function fatturato_by_agentCall(idCanvas) {
    $.ajax({
      url: "server.php",
      data: {
        level: "employee"
      },
      success: function(data){
        printChart(data,idCanvas,data.fatturato_by_agent.type,data.fatturato_by_agent.name,data.fatturato_by_agent.value);
      }
    });
  }

  function teamEfficiencyCall(idCanvas) {
    $.ajax({
      url: "server.php",
      data: {
        level: "clevel"
      },
      success: function(data){
        var ctx = idCanvas;
        var myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: getMonthsList(),
                datasets: [{
                    // team 1 ------------------------------------
                      label: "Team1",
                      data: data.team_efficiency.data.Team1,
                      backgroundColor: ['rgba(255, 99, 132, 0.4)'],
                      borderColor: ['rgba(255, 99, 132, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 2 ------------------------------------
                      label: "Team2",
                      data: data.team_efficiency.data.Team2,
                      backgroundColor: ['rgba(54, 162, 235, 0.4)'],
                      borderColor: ['rgba(54, 162, 235, 1)'],
                      borderWidth: 1
                    },
                    {
                    // team 3 ------------------------------------
                      label: "Team3",
                      data: data.team_efficiency.data.Team3,
                      backgroundColor: ['rgba(75, 192, 192, 1)'],
                      borderColor: ['rgba(75, 162, 162, 1)'],
                      borderWidth: 1
                    }],
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        }
      })
      }
    })
  };


  fatturatoCall($('#myChart'));
  fatturato_by_agentCall($('#myPieChart'));
  teamEfficiencyCall($('#tripleLineChart'));
});
