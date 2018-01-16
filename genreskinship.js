google.charts.load('current', {
  packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', 'M');
  data.addColumn('number', 'W');

  data.addRows([
    ['1', 8, 9],
    ['2', 7, 5],
    ['3', 1, 1],
    ['4', 6, 12],
    ['5', 9, 7],
    ['6', 8, 2],
    ['7', 12, 4],
    ['8', 8, 4],
    ['9', 2, 32],
    ['10', 7, 9],
    ['11', 2, 2],
    ['12', 0, 0],
    ['13', 3, 4]
  ]);

  var options = {
    height: 500,
    hAxis: {
      title: 'Genre'
    },
    vAxis: {
      title: 'Skinship'
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('genreskinship'));
  chart.draw(data, options);
}
