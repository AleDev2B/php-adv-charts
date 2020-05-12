$(document).ready(function() {

  function getMonthsList() {
    var months = [];
    for (var i = 0; i < 12; i++) {
      months.push(moment.months(i));
    }
    return months;
  };

  function ajaxCall(typeOfChart) {

    $.ajax({
      url: "server.php",
      success: function(data){
        // console.log(data);
        var ctx = $('#myChart');
        var myChart = new Chart(ctx, {
            type: typeOfChart,
            data: {
                labels: getMonthsList(),
                datasets: [{
                    label: 'Vendite',
                    data: data,
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
      }
    }); // fine della chiamata ajax
  } // fine della funzione ajax call

  function printChart() {
    ajaxCall("line");     // <-- pass the argument in the ajaxCall function to select the type of chart.
    
  } // fine della function disegna il grafico a linea

  printChart();

});
