(function(global) {

console.log("in content script send_xhr.js");
localStorage.foo = "bar";

function sendXHR() {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://lightbeamdb.org/shareData", true);
  xhr.setRequestHeader("Collusion-Share-Data","collusion");
  xhr.setRequestHeader("Content-type","application/json");
  
  data = {"format": "Lightbeam Save File", "version": "1.1",
          "connections": [] };
  xhr.onload = function(){
    console.log("upload response", xhr.responseText);
    let status = Number(xhr.status);
    if (status >= 200 && status < 300) {
      console.log("upload success");
    } else {
      console.log("upload failure", xhr.status);
    }
  };
  xhr.onerror = function(){
    console.log("Share data attempt failed");
    console.log("Status: ", xhr.status, xhr.statusText);
    console.log("Response: ", xhr.responseType, xhr.responseText);
  };
  xhr.send(JSON.stringify(data));
}

sendXHR();
})(this); // namespace
