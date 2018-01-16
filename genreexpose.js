      google.charts.load('current', {
        'packages': ['line']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Exposure');
        data.addColumn('number', '정보통신');
        data.addColumn('number', '전기전자');
        data.addColumn('number', '자동차/정유');
        data.addColumn('number', '음료/기호식품');
        data.addColumn('number', '식품/제과');
        data.addColumn('number', '생활/가정용품');
        data.addColumn('number', '화장품');
        data.addColumn('number', '패션/스포츠');
        data.addColumn('number', '제약/의료/복지');
        data.addColumn('number', '금융/보험');
        data.addColumn('number', '아파트/건설');
        data.addColumn('number', '출판/교육/문화');
        data.addColumn('number', '서비스/유통/레저');

        data.addRows([
          ['1',103, 87, 28, 48, 125, 42, 37, 59, 38, 102, 20, 88, 58],
          ['2',29, 30, 6, 37, 54, 19, 13, 10, 2, 12, 7, 20, 8],
          ['3',8, 5, 1, 4, 3, 2, 3, 7, 2, 1, 3, 2, 11],
          ['4',18, 15, 8, 31, 37, 8, 34, 7, 9, 17, 2, 12, 7],
          ['5',9, 7, 3, 12, 8, 7, 9, 8, 6, 9, 1, 5, 7],
        ]);

        var options = {
          chart: {
            title: 'Genre Exposure'
          },
          height: 600,
          hAxis: {
            title: "Genre",
            direction: -1,
            slantedText: true,
            slantedTextAngle: 45,
          },
          axes: {
            x: {
              0: {
                side: 'bottom'
              }
            }
          }
        };

        var chart = new google.charts.Line(document.getElementById('genreexpose'));

        chart.draw(data, google.charts.Line.convertOptions(options));
      }
