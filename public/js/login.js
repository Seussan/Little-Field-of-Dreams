$(document).ready(function() {

  //LOGIN CODE STARTS HERE
  // Getting references to our form and inputs
  var loginForm = $("form.login");
  var emailLogin = $("input#email-login");
  var passwordLogin = $("input#password-login");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailLogin.val().trim(),
      password: passwordLogin.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailLogin.val("");
    passwordLogin.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function(err) {
      console.log(err);
    });
  }
  //LOGIN CODE ENDS HERE

  //SIGNUP CODE STARTS HERE

  var signUpForm = $("form.signup");
  var emailSignup = $("input#email-signup");
  var passwordSignup = $("input#password-signup");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      email: emailSignup.val().trim(),
      password: passwordSignup.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailSignup.val("");
    passwordSignup.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(function(data) {
      window.location.replace(data);
    }).catch(function(err) {
      console.log(err);
    });
  }

  //SIGNUP CODE ENDS HERE

});
