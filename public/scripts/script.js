$(function() {

  $("#brandname").fadeIn(4000);


  $("#arrow").click(function() {
    $('html,body').animate({
        scrollTop: $("#navigate").offset().top},
          'slow');
  });

  $("#logout").click(function(e){
    e.preventDefault();

  //   jwtMod.verify(jwt, jwt_secret, function(err, decoded) {
  //    if(err) return(err);

//      return res.send(decoded);
    blacklist.revoke(req.user);
    res.redirect('/');
   });

    window.location = '/logout/' + localStorage.getItem('jwt_token');

  });
});
