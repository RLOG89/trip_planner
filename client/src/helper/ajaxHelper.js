var ajaxHelper = {
  makeGetRequest: function (url, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
      if (this.status !== 200) {
        console.log("Request failed: ", this.status)
      } else {
        callback(this.responseText);
      }
    }
    request.send();
  },
    makePostRequest: function(url, data, callback) {
      var request = new XMLHttpRequest();
      request.open("POST", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function() {
        if (this.status !== 200) {
          console.log("request failed: ", this.status );
        } else{
          callback(request.responseText);
        } 
      }
      request.send(JSON.stringify(data));
    },
      makePutRequest: function(url, data) {
      var request = new XMLHttpRequest();
      request.open("PUT", url);
      request.setRequestHeader("Content-Type", "application/json");
      request.onload = function() {
        if(request.status === 200) {
        }
      };
      request.send(JSON.stringify(data));
    },
};

module.exports = ajaxHelper;