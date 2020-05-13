$(document).ready(function() {

  function getMonthsList() {
    var months = [];
    for (var i = 0; i < 12; i++) {
      months.push(moment.months(i));
    }
    return months;
  };

  function init() {

    function ajaxCall(ctxValue) {

      $.ajax({
        url: "server.php",
        success: function(data){
          var ctx = ctxValue;
          var myChart = new Chart(ctx, {
              type: data.fatturato.type,
              data: {
                  labels: getMonthsList(),
                  datasets: [{
                      label: 'Vendite',
                      data: data.fatturato.data,
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

    ajaxCall($('#myChart'));

  }   // <-- fine della funzione init


init();



});
