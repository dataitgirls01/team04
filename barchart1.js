/*    <script>
*/    var margin = {top: 80, right: 80, bottom: 80, left: 80},
        width = 1000 - margin.left - margin.right,
        height = 800 - margin.top - margin.bottom;
    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);
    var y = d3.scale.linear()
        .range([height - 1, 0]);
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    var yAxis = d3.svg.axis().scale(y).ticks(4).orient("left");

    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("class", "graph")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var tip1 = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
        return "<strong>Ratio:</strong> <span style='color:red'>" + d.mfreq + "</span>";
        })
    var tip2 = d3.tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function(d) {
        return "<strong>Ratio:</strong> <span style='color:red'>" + d.ffreq + "</span>";
        })
    svg.call(tip1);
    svg.call(tip2);

    d3.csv("gender_occupation1.csv", function(error, data) {
      var occupations = d3.set(data.map(function(d) {return d.dat$Occupation;})).values();
      var maxFreq = d3.max(data, function(d) {return + d.freq;});

      data = d3.nest()
        .key(function(d) {return d['dat$Occupation'];})
        .entries(data)
        .map(function(d) {
          var flat = {
            occupation: d.key,
            mn: 0,
            mfreq: 0.0,
            fn: 0,
            ffreq: 0.0
          };

          d.values.forEach(function(row) {
            var gender = row['dat$Gender'] === '1' ? 'm' : 'f';
            flat[gender + 'n'] = +row['n'];
            flat[gender + 'freq'] = +row['freq'];
          });
          return flat;
        });

      x.domain(occupations);
      y.domain([0, maxFreq]);

      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);
      svg.append("g")
        .attr("class", "y axis axisLeft")
        .attr("transform", "translate(0,0)")
        .call(yAxis)
      .append("text")
        .attr("y", 6)
        .attr("dy", "-2em")
        .style("text-anchor", "end")
        .style("text-anchor", "end")
        .text("ratio");

      bars = svg.selectAll(".bar").data(data).enter();
      bars.append("rect")
          .attr("class", "bar1")
          .attr("x", function(d) { return x(d.occupation); })
          .attr("width", x.rangeBand() / 2)
          .attr("y", function(d) { return y(d.mfreq); })
          .attr("height", function(d) { return height - y(d.mfreq); })
          .on('mouseover', tip1.show)
          .on('mouseout', tip1.hide);
      bars.append("rect")
          .attr("class", "bar2")
          .attr("x", function(d) { return x(d.occupation) + x.rangeBand() / 2; })
          .attr("width", x.rangeBand() / 2)
          .attr("y", function(d) { return y(d.ffreq); })
          .attr("height", function(d) { return height - y(d.ffreq); })
          .on('mouseover', tip2.show)
          .on('mouseout', tip2.hide);

    });


    function type(d) {
      d.freq = +d.freq;
      return d;}

/*    </script>
*/