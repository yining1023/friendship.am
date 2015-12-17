window.onload = function() {
  var obj = getJSON();
  var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

  var a = document.getElementById('save-btn');
  a.href = 'data:' + data;
  a.download = 'ysMessages.json';
  a.innerHTML = 'Save as JSON';

  var container = document.getElementById('container');
};

var getJSON = function() {
  var json = [];

  $(".msg").each(function(i) {
    var msg = {};
    msg.author = $(this).find(".actor").text();
    msg.text = $(this).find("span").text();
    var dataStore = $(this).siblings(".actions").find("abbr").attr("data-store");
    if(!dataStore){
      msg.timestamp = null;
    }
    else {
      msg.timestamp = JSON.parse(dataStore).time;
    }

    json.push(msg);
  });

  return json;
};