google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Genre');
      data.addColumn('number', 'Frequency');

      data.addRows([
        ['정보통신',6312],
        ['전기전자', 5272],
        ['자동차/정유', 2927],
        ['음료/기호식품', 3800],
        ['식품/제과', 6083],
        ['생활/가정용품', 2972],
        ['화장품', 3767],
        ['패션/스포츠', 3439],
        ['제약/의료/복지', 2329],
        ['금융/보험', 4705],
        ['아파트/건설', 1254],
        ['출판/교육/문화', 6194],
        ['서비스/유통/레저', 3680],
        ['단체/공익', 4431]
      ]);

      var options = {
        title: 'Genre Frequency',
        colors: ['#9575cd', '#33ac71'],
        
        height: 500,
        
        hAxis: {
          title: 'Genre',
          format: 'string',
        },
       
        vAxis: {
          title: 'Frequency'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('genrefreq'));

      chart.draw(data, options);
    }