google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Night', 'Day', 'Both'],
    ['정보통신', 8, 42, 10],
    ['전기전자', 1, 27, 11],
    ['자동차/정유', 1, 23, 4],
    ['음료/기호식품', 9, 41, 4],
    ['식품/제과', 11, 72, 8],
    ['생활/가정용품', 2, 30, 8],
    ['화장품', 8, 28, 6],
    ['패션/스포츠', 8, 42, 6],
    ['제약/의료/복지', 5, 24, 7],
    ['금융/보험', 3, 49, 10],
    ['아파트/건설', 2, 9, 6],
    ['출판/교육/문화', 2, 20, 11],
    ['서비스/유통/레저', 3, 35, 3]
  ]);

  var options = {
    chart: {
      title: 'Genre Time'
    },
    bars: 'vertical',
    vAxis: {
      format: 'decimal'
    },
    hAxis: {
      title: 'Count'
    },
    height: 500,
    colors: ['#9575cd', '#33ac71', '#ef8354']
  };

  var chart = new google.charts.Bar(document.getElementById('genretime'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function(e) {

    if (e.target.tagName === 'BUTTON') {
      options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
