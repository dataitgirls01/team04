google.charts.load('current', {
  'packages': ['line']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Exposure');
  data.addColumn('number', 'Male');
  data.addColumn('number', 'Female');

  data.addRows([
    ["결측", 9, 6],
    ["1", 567, 253],
    ["2", 107, 140],
    ["3", 24, 28],
    ["4", 35, 170],
    ["5", 26, 65]
  ]);

  var options = {
    chart: {
      title: 'Gender Exposure'
    },
    height: 500,
    colors: ['#6b99f7', '#f7786b'],
    axes: {
      x: {
        0: {
          side: 'bottom'
        }
      }
    }
  };

  var chart = new google.charts.Line(document.getElementById('genderexpose'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}