

$(function() {
  var $loginForm = $('#login-form');
  var $email = $('#email');
  var $password = $('#password');

  console.log("login.js loaded");

  $loginForm.submit(function(e) {
    e.preventDefault();

    console.log("clicked on button");

    $.ajax({
          url: 'http://localhost:9000/admin/login',
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
      alert('success login');
      localStorage.setItem('jwt_token', res);
      console.log("saved jwt to browser: " + res);
      //redirect to surveys??
      window.location = '/surveys/take';
      // survey
    }

    function failResponse(req, textStatus, errThrown) {
      // alert('fail');
      console.log("failResponse :" + req );
      console.log("fail error message :" + textStatus +  " " + errThrown);
    }

  });
});
