$(function() {
  console.log("testing");
  $("#brandname").fadeIn(4000);


  $("#arrow").click(function(e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#navigate").offset().top},
          'slow');
  });

  $(".arrowPg").click(function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(target).offset().top},
          'slow');
  });

  $("#jwt_token").val(localStorage.getItem('jwt_token'));

  $.ajax({
    url: "https://evening-retreat-40915.herokuapp.com/api/surveys",
    // headers: {"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjU3YmJjODFiZjJhN2MwMWE1Y2JmOWYyMiIsImVtYWlsIjoiZ2VyYWxkQGcuY29tIiwiaWF0IjoxNDcxOTU0MTc3LCJleHAiOjE0NzE5NjQ5Nzd9.dZzFLd_oaEtgwVvCDpsrKGy-ryFfRg0wOc8FLV_bS5w"},
    type: "GET",
    datatype: 'json',
  }).done(function(result) {
    var $sample = $('#samplesize');
    var data = result.apiData;
    $sample.text("N = " + data[0].totalSurvey);
    var categoryRingChart   = dc.pieChart("#chart-ring-category"),
        npsRowChart = dc.rowChart("#chart-row-nps");
    var data1 = [
        {Name: data[0].Brand, npsScore: data[0].NPS_Score, category: "TECH",'total': 5},
        {Name: data[3].Brand, npsScore: data[3].NPS_Score, category: "TECH",'total': 5},
        {Name: data[6].Brand, npsScore: data[6].NPS_Score, category: " TELCO",'total': 3},
        {Name: data[7].Brand, npsScore: data[7].NPS_Score, category: " TELCO",'total': 3},
        {Name: data[8].Brand, npsScore: data[8].NPS_Score, category: "ASS",'total': 2},
    ];
    // set crossfilter with first dataset
    var xfilter = crossfilter(data1),
        npsScoreDim = xfilter.dimension(function(d) {return Math.floor(+d.npsScore);}),
        nameDim  = xfilter.dimension(function(d) {return d.Name;}),
        categoryDim  = xfilter.dimension(function(d) {return d.category;}),

        npsScorePerCategory = categoryDim.group().reduceSum(function(d) {return +d.npsScore;}),
        npsScorePerName = nameDim.group().reduceSum(function(d) {return +d.npsScore;});
    function render_plots(){
        categoryRingChart
            .width(160).height(160)
            .dimension(categoryDim)
            .group(npsScorePerCategory)
            .ordinalColors(['#2B3D41', '#216869', '#56445D','#546A76'])
            .innerRadius(40);
        npsRowChart
            .width(450).height(270)
            .dimension(nameDim)
            .group(npsScorePerName)
            .ordinalColors(['#98C1D9','#98C1D9','#98C1D9','#98C1D9','#EDBBB4'])
            .elasticX(true);
        dc.renderAll();
    }

    render_plots();

  }).fail(function(){
    console.log("test fail");
  });
//
//   $("#logout").click(function(e){
//     e.preventDefault();
//
//   //   jwtMod.verify(jwt, jwt_secret, function(err, decoded) {
//   //    if(err) return(err);
//
// //      return res.send(decoded);
//     blacklist.revoke(req.user);
//     res.redirect('/');
//    });
//
//     window.location = '/logout/' + localStorage.getItem('jwt_token');
//
//   });

});
