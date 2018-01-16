google.charts.load('current', {
  'packages': ['line']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Age Group');
  data.addColumn('number', 'Male');
  data.addColumn('number', 'Female');

  data.addRows([
    ["0-9", 1, 5],
    ["10-19", 9, 37],
    ["20-29", 126, 134],
    ["30-39", 128, 79],
    ["40-49", 62, 17],
    ["50 +", 43, 7]
  ]);

  var options = {
    chart: {
      title: 'Gender AgeGroup',
    },
    height: 500,
    axes: {
      x: {
        0: {
          side: 'bottom'
        }
      }
    }
  };

  var chart = new google.charts.Line(document.getElementById('genderage'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}
