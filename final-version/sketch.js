var r = new Rune({
  container: "#canvas",
  width: 3000,
  height: 4200,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill(30).stroke(false);
// r.rect(0, 0, r.width, r.height).fill("#ffffff").stroke(false);

var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  columns: 1,
  rows: 10000
});

var fullMessage;
var color1 = new Rune.Color(0, 174, 239);
var color = new Rune.Color(244, 154, 193);
var radius = 480;
var radius2 = 240;

var points = 240;
var spacing = 360/points;

var col = 0.15;

var floor = 0;
var miss = 0;
var haha = 0;
var doing = 0;
var home = 0;

var xx = r.width/2+Math.cos(Rune.radians(0 * spacing - 90)) * 960;
var yy = -400+r.height/2+Math.sin(Rune.radians(0 * spacing - 90)) * 960;
var pm = r.line(xx, yy, 2900, yy).stroke("#ffffff").fill(false).strokeWidth(1.5);

var xx = r.width/2+Math.cos(Rune.radians(0 * spacing - 90)) * 360;
var yy = -400+r.height/2+Math.sin(Rune.radians(0 * spacing - 90)) * 360;
var pm = r.line(xx, yy, 2900, yy).stroke("#ffffff").fill(false).strokeWidth(1.5);

$.getJSON('fullMessage.json')
   .done(function (data) {
       fullMessage = data;
      for(var i = 0; i < 10000; i++){
        if(i==9999){
          console.log(miss);
          console.log(home);
          console.log(haha);
          console.log(floor);
          console.log(doing);
        }
        var name = fullMessage[i].author;
        var text = fullMessage[i].text;
        var time = fullMessage[i].timestamp;
        var textLength = text.length;

        var date = new Date(time*1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        if(name == "Yining  Shi"){
          var color = new Rune.Color(244, 154, 193, 0.2);
          var colorLine = new Rune.Color(244, 154, 193, col);
          var xWord = 0;
          if(text.toLowerCase().indexOf("i miss you") > -1 ||
            text.toLowerCase().indexOf("i missed you") > -1) {
            //red
            var color = new Rune.Color("#ed145b", 0.4);
            var colorLine = new Rune.Color("#ed145b", col);
            var xWord = 1300;
            miss++;
          }
          if(text.toLowerCase().indexOf("home") > -1){
            //orange
            var color = new Rune.Color("#fe9001", 0.4);
            var colorLine = new Rune.Color("#fe9001", col);

            var xWord = 1400;
            home++;
          }
          if(text.toLowerCase().indexOf("haha") > -1){
            

            //green 82ca9c
            var color = new Rune.Color("#3cb878", 0.4);
            var colorLine = new Rune.Color("#3cb878", col);

            var xWord = 1500;
            haha++;
          }
          if(text.toLowerCase().indexOf("floor") > -1){
            //yellow
            var color = new Rune.Color("#fff568", 0.4);
            var colorLine = new Rune.Color("#fff568", col);
            var xWord = 1600;
            floor++;
          }
          if(text.toLowerCase().indexOf("what are you doing") > -1 || 
            text.toLowerCase().indexOf("whatcha") > -1){
            //blue
            var color = new Rune.Color("#0269ce", 0.6);
            var colorLine = new Rune.Color("#0269ce", col+0.2);
            var xWord = 1700;
            doing++;
          }
          // else{
            //pink
            // var color = new Rune.Color(244, 154, 193, 0.2);
            // var colorLine = new Rune.Color(244, 154, 193, col);
            // var xWord = 0;
            // console.log(text);
          // }

          if(hours >= 0 && hours <= 11){
            radius = 480;
            randomPos = Rune.random(-90,90);
          }
          else if(hours >= 12 && hours <= 23){
            radius = 1080;
            hours -= 12; 
            randomPos = Rune.random(-110,110);
          }
          
          radius += randomPos;
          var size = 20 + textLength/10;
          var x = r.width/2+Math.cos(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius;
          var y = -400+r.height/2+Math.sin(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius;

          var tree2 = r.circle(x, y, size)
            .fill(color)
            .stroke(false);

          if(xWord !== 0){
            var path = r.path(x, y)
              .curveTo(xWord-x, 2050-y, xWord-x, 4100-y)
              .stroke(colorLine)
              .fill(false);
          }
        }

        else if(name == "Sagar Mohite"){
          var color2 = new Rune.Color("#6dcff6", 0.3);
            var colorLine2 = new Rune.Color("#6dcff6", col);
            var xWord2 = 0;
          if(text.toLowerCase().indexOf("i miss you") > -1 ||
            text.toLowerCase().indexOf("i missed you") > -1) {
            //red
            var color2 = new Rune.Color("#ed145b", 0.4);
            var colorLine2 = new Rune.Color("#ed145b", col);
            var xWord2 = 1300;
            miss++;

          }
          if(text.toLowerCase().indexOf("home") > -1){
            //orange
            var color2 = new Rune.Color("#fe9001", 0.4);
            var colorLine2 = new Rune.Color("#fe9001", col);
            
            var xWord2 = 1400;
            home++;
          }
          if(text.toLowerCase().indexOf("haha") > -1){
            //green
            var color2 = new Rune.Color("#82ca9c", 0.2);
            var colorLine2 = new Rune.Color("#82ca9c", col);
            
            var xWord2 = 1500;
            haha++;
          }
          if(text.toLowerCase().indexOf("floor") > -1){
            //yellow
            var color2 = new Rune.Color("#fff568", 0.4);
            var colorLine2 = new Rune.Color("#fff568", col);
            var xWord2 = 1600;
            floor++;
          }
          if(text.toLowerCase().indexOf("what are you doing") > -1 || 
            text.toLowerCase().indexOf("whatcha") > -1){
            console.log(text);
            //blue 3568db
            var color2 = new Rune.Color("#0269ce", 0.6);
            var colorLine2 = new Rune.Color("#0269ce", col+0.2);


            var xWord2 = 1700;
            doing++;
          }
          // else{
            //blue
            // var color2 = new Rune.Color("#6dcff6", 0.3);
            // var colorLine2 = new Rune.Color("#6dcff6", col);
            // var xWord2 = 0;
          // }

          if(hours >= 0 && hours <= 11){
            radius2 = 240;
            randomPos = Rune.random(-90,90);
          }
          else if(hours >= 12 && hours <= 23){
            radius2 = 840;
            hours -= 12;
            randomPos = Rune.random(-110, 110); 
          }

          
          radius2 += randomPos;
          var size2 = 20 + textLength/10;
          var x2 = r.width/2+Math.cos(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius2;
          var y2 = -400+r.height/2+Math.sin(Rune.radians(2*hours*10 * spacing - 90 + minutes*30/60)) * radius2;
 
          var tree2 = r.circle(x2, y2, size2)
          .fill(color2)
          .stroke(false);

          if(xWord2 !== 0){
            var path = r.path(x2, y2)
              .curveTo(xWord2-x2, 2050-y2, xWord2-x2, 4100-y2)
              .stroke(colorLine2)
              .fill(false);
          }
        }
      }
    r.draw();
   });

function save() {
    var svg = document.querySelector('svg');
    svg.setAttribute("version", "1.1");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
    
    //SVG element should be the only child of the parent container
    var html = svg.parentNode.innerHTML;
    
    var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
    
    //trigger download
    var a = document.createElement('a');
    a.download = "image.svg";
    a.href = imgsrc;
    document.body.appendChild(a);
    a.click();
    
}