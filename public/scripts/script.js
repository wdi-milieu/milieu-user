$(function() {

  $("#brandname").fadeIn(4000);


  $("#arrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#navigate").offset().top},
          'slow');
  });


  $("#jwt_token").val(localStorage.getItem('jwt_token'));

});
