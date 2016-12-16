var testLogin = [
{
  username: "Adrian",
  password: "password"
},
{
 username: "Max",
 password: "12345" 
},
{
  username: "Ross",
  password: "testing" 
},
{
  username: "Tom",
  password: "TheFace" 
}
]

validate = function() {
  var username = document.getElementById("username").value
  var password = document.getElementById("password").value

  for (var i = 0; i < testLogin.length; i++) {
    if (username == testLogin[i].username && password == testLogin[i].password) {
      console.log(username + " is logged in!")
      return;
    }
  }
  console.log("incorrect username or password")
}