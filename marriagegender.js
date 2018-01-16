google.charts.load('current', {
  packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
  var data = google.visualization.arrayToDataTable([
    ['City', 'Man', 'woman'],
    ['Marry', 1190.6685393, 590.3314607],
    ['Single', 2510.5329087, 2200.4670913]
  ]);

  var options = {
    height: 500,
    title: 'marriage',
    chartArea: {
      width: '70%'

    },
    hAxis: {
      title: 'Population',
      minValue: 0
    },
    vAxis: {

    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('marriagegender'));
  chart.draw(data, options);
}
