validate = function() {
  var username = document.getElementById("login-user-name").value
  var password = document.getElementById("login-password").value

  ajaxHelper.makeGetRequest("http://localhost:3000/trips", username, function(password) {
    if(password == )
  })