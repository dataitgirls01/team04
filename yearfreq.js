google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Genre');
      data.addColumn('number', 'Ads');     
      
      data.addRows([
        ['1995',198],
        ['1996', 235],
        ['1997', 2692],
        ['1998', 660],
        ['1999', 2701],
        ['2000', 971],
        ['2001', 144],
        ['2002', 1662],
        ['2003', 1843],
        ['2004', 2164],
        ['2005', 2289],
        ['2006', 2395],
        ['2007', 2543],
        ['2008', 2588],
        ['2009', 2484],
        ['2010', 2730],
        ['2011', 3240],
        ['2012', 3797],
        ['2013', 3906],
        ['2014', 4446],
        ['2015', 4557],
        ['2016', 4664],
        ['2017', 4256]
      ]);

      var options = {
        title: 'Year Frequency',
        colors: ['#33ac71'],
        height: 500,
        
        hAxis: {
          title: 'Genre',
          format: 'string',
        },
       
        vAxis: {
          title: 'Number of Ads'
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('yearfreq'));

      chart.draw(data, options);
    }