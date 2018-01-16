google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Social', 'Personal', 'Both'],
    ['정보통신', 57, 22, 23],
    ['전기전자', 36, 22, 14],
    ['자동차/정유', 22, 6, 3],
    ['음료/기호식품', 49, 17, 4],
    ['식품/제과', 56, 34, 17],
    ['생활/가정용품', 10, 27, 7],
    ['화장품', 27, 11, 13],
    ['패션/스포츠', 44, 8, 10],
    ['제약/의료/복지', 23, 7, 14],
    ['금융/보험', 61, 10, 12],
    ['아파트/건설', 9, 4, 2],
    ['출판/교육/문화', 41, 6, 9],
    ['서비스/유통/레저', 34, 10, 9]
  ]);

  var options = {
    chart: {
      title: 'GENRE SPACE'
    },
    bars: 'vertical',
    vAxis: {
      format: 'decimal'
    },
    height: 500,
    colors: ['#9575cd', '#33ac71', '#ef8354']
  };

  var chart = new google.charts.Bar(document.getElementById('genrespace'));

  chart.draw(data, google.charts.Bar.convertOptions(options));


}
