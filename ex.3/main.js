$(document).ready(function() {

  function getMonthsList() {
    return moment.months();
  };

  function getUserLevel() {
    var url_string = window.location;
    var url = new URL(url_string);
    var c = url.searchParams.get("level");
    return c;
  }

  function printChart(idCanvas,typeChart,labelsVal,datasets) {

    var ctx = idCanvas;
    var myChart = new Chart(ctx, {
        type: typeChart,
        data: {
            labels: labelsVal,
            datasets: datasets
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
    })
  }

  function fatturatoCall(idCanvas) {
    $.ajax({
      url: "server.php",
      data: {
        level: getUserLevel()
      },
      success: function(data){

        if ('fatturato' in data) {
          console.log("fatturato call", data.fatturato.data);

          var datasets = [
            {
              label : 'Mia label',
              data : data.fatturato.data
            }
          ];

          printChart(idCanvas,data.fatturato.type,getMonthsList(),datasets);
        }
      }
    });
  }

  function fatturato_by_agentCall(idCanvas) {
    $.ajax({
      url: "server.php",
      data: {
        level: getUserLevel()
      },
      success: function(data){

        if ('fatturato_by_agent' in data) {
          var datasets = [
            {
              label : 'Mia label',
              data : data.fatturato_by_agent.value
            }
          ];

          printChart(idCanvas,data.fatturato_by_agent.type,data.fatturato_by_agent.name, datasets);
        }

      }
    });
  }


  function teamEfficiencyCall(idCanvas) {

    $.ajax({
      url: "server.php",
      data: {
        level: getUserLevel()
      },
      success: function(data){

        if ('team_efficiency' in data) {

          var dataset = [{
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
            }];

          printChart(idCanvas,data.fatturato.type,getMonthsList(),dataset);
        }
      }
    })
  }


  fatturatoCall($('#myChart'));
  fatturato_by_agentCall($('#myPieChart'));
  teamEfficiencyCall($('#tripleLineChart'));

});
