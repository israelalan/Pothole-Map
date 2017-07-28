var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
var url = "http://localhost:5000/coordinates";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
var data = JSON.stringify({'longitude':12});
xhr.send(data);