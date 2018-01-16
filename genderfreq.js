      google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Gender', 'Main Character'],
          ['Male', 768],
          ['Female', 662],
        ]);

        var options = {
          title: 'Gender Ratio',
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'none',
          slices: {
            0: { color: '#6b99f7' },
            1: { color: '#f7786b' }
          }
        };

        var chart = new google.visualization.PieChart(document.getElementById('genderfreq'));
        chart.draw(data, options);
      }
