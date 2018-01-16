google.charts.load('current', {
  'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Occupation', 'Male', 'Female'],
    ["군인", 1, 0],
    ["관리자", 0.88, 0.11],
    ["전문가", 0.59, 0.40],
    ["회사원", 0.58, 0.41],
    ["서비스업", 0.51, 0.48],
    ["판매원", 0.8, 0.2],
    ["농림어업", 0.75, 0.25],
    ["기능원", 1, 0],
    ["단순노동", 0.66, 0.33],
  ]);

  var options = {
    chart: {
      title: 'Gender Occupation',
    },
    bars: 'vertical',
    vAxis: {
      format: 'decimal'
    },
    height: 500,
    colors: ['#6b99f7', '#f7786b']
  };


  var chart = new google.charts.Bar(document.getElementById('genderoccupation'));

  chart.draw(data, google.charts.Bar.convertOptions(options));

  var btns = document.getElementById('btn-group');

  btns.onclick = function(e) {

    if (e.target.id === "none") {
      data = google.visualization.arrayToDataTable([
        ['Year', 'Male'],
        ['정보통신', 95],
        ['전기전자', 77],
        ['자동차/정유', 32],
        ['음료/기호식품', 74],
        ['식품/제과', 129],
        ['생활/가정용품', 28],
        ['화장품', 30],
        ['패션/스포츠', 52],
        ['제약/의료/복지', 31],
        ['금융/보험', 83],
        ['아파트/건설', 16],
        ['출판/교육/문화', 76],
        ['서비스/유통/레저', 45]
      ]);
      options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }
  }
}
