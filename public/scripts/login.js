

$(function() {
  var $loginForm = $('#login-form');
  var $email = $('#email');
  var $password = $('#password');

  $loginForm.submit(function(e) {
    e.preventDefault();


    $.ajax({
          url: 'https://evening-retreat-40915.herokuapp.com/admin/login',
          type: 'POST',
          data: {
            email: $email.val(),
            password: $password.val()
          }
        }).done(loginSuccess)
          .fail(failResponse)
          .always(function(){
            console.log("always")
          });

    function loginSuccess(res) {
      localStorage.setItem('jwt_token', res);
      //redirect to surveys??
      window.location = '/surveys/take';
      // survey
    }

    function failResponse(req, textStatus, errThrown) {
      // alert('fail');
      console.log("failResponse :" + req.body );
      console.log("fail error message :" + textStatus +  " " + errThrown);
    }

  });
});
