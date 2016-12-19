var ajaxHelper = {
  makeGetRequest: function (url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (this.status !== 200) {
        console.log("Request failed: ", this.status)
      } else {
        callback = JSON.parse(this.responseText);
      }
    }
    request.send();
  },
    makePostRequest: function(url, data) {
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function() {
        if (this.status !== 200) {
          console.log("request failed: ", this.status );
        } 
      }
      request.send(JSON.stringify(data));
    }
};

module.exports = ajaxHelper;