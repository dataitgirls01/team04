      google.charts.load('current', {
        'packages': ['bar']
      });
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Male', 'Female'],
          ['정보통신', 95, 72],
          ['전기전자', 77, 67],
          ['자동차/정유', 32, 14],
          ['음료/기호식품', 74, 58],
          ['식품/제과', 129, 98],
          ['생활/가정용품', 28, 50],
          ['화장품', 30, 66],
          ['패션/스포츠', 52, 39],
          ['제약/의료/복지', 31, 26],
          ['금융/보험', 83, 58],
          ['아파트/건설', 16, 17],
          ['출판/교육/문화', 76, 51],
          ['서비스/유통/레저', 45, 46]
        ]);

        var options = {
          chart: {
            title: 'Genre Gender',
          },
          bars: 'vertical',
          vAxis: {
            title: 'Count',
            format: 'decimal'
          },
          height: 500,
          colors: ['#6b99f7', '#f7786b']
        };

        var options1 = {
          chart: {
            title: 'Genre Gender',
          },
          bars: 'vertical',
          vAxis: {
            title: 'Count',
            format: 'decimal'
          },
          height: 500,
          colors: ['#f7786b', '#f7786b']
        };

        var chart = new google.charts.Bar(document.getElementById('gendergenre'));

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

          if (e.target.id === "scientific") {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Male', 'Female'],
              ['정보통신', 95, 72],
              ['전기전자', 77, 67],
              ['자동차/정유', 32, 14],
              ['음료/기호식품', 74, 58],
              ['식품/제과', 129, 98],
              ['생활/가정용품', 28, 50],
              ['화장품', 30, 66],
              ['패션/스포츠', 52, 39],
              ['제약/의료/복지', 31, 26],
              ['금융/보험', 83, 58],
              ['아파트/건설', 16, 17],
              ['출판/교육/문화', 76, 51],
              ['서비스/유통/레저', 45, 46]
            ]);
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options));
          }


          if (e.target.id === "decimal") {
            var data = google.visualization.arrayToDataTable([
              ['Year', 'Female'],
              ['정보통신', 72],
              ['전기전자', 67],
              ['자동차/정유', 14],
              ['음료/기호식품', 58],
              ['식품/제과', 98],
              ['생활/가정용품', 50],
              ['화장품', 66],
              ['패션/스포츠', 39],
              ['제약/의료/복지', 26],
              ['금융/보험', 58],
              ['아파트/건설', 17],
              ['출판/교육/문화', 51],
              ['서비스/유통/레저', 46]
            ]);
            options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
            chart.draw(data, google.charts.Bar.convertOptions(options1));
          }



        }
      }
