var r = new Rune({
  container: "#canvas",
  width: 1200,
  height: 1600,
  // debug: true
});

r.rect(0, 0, r.width, r.height).fill("#ffffff").stroke(false);
// for(var m = 0; m < 120; m++){
//   r.rect(0, r.height - 120 + m, r.width, 120 - m).fill('hsv', 224, 56, 33-33/120*m).stroke(false);
// }
// for(var m = 0; m < 120; m++){
//   r.rect(0, m, r.width, 120 + m).fill('hsv', 224, 56, 66 - m*33/120).stroke(false);
// }

// var f = new Rune.Font("Roboto-Regular.ttf");

// f.load(function(err) {
// Create a rectangle to fill the entire screen
// and a smaller rectangle on top
var grid = r.grid({
  x: 0,
  y: 0,
  width: r.width,
  height: r.height,
  // gutter: 10,
  columns: 100,
  rows: 100
});

var fullMessage;
var color1 = new Rune.Color(0, 174, 239);
var color = new Rune.Color(244, 154, 193);

$.getJSON('fullMessage.json')
   .done(function (data) {
       fullMessage = data;
       console.log(fullMessage[2].text);
       console.log(fullMessage[2].text.length);
       // console.log(fullMessage.length);
       
    for(var j = 1; j < 101; j++)
    {
      for(var i = 1; i < 101; i++){
        var name = fullMessage[j*100+i].author;
        var text = fullMessage[j*100+i].text;
        var time = fullMessage[j*100+i].timestamp;
        // var tree2 = "";
        // switch(name){
        //   case "Yining  Shi":
        //     var tree2 = r.circle(grid.vars.moduleWidth/2, grid.vars.moduleHeight/2, 4)
        //     .fill(color)
        //     .stroke(false);
        //     break;

        //   case "Sagar Mohite":           
        //     var tree2 = r.triangle(grid.vars.moduleWidth/2, grid.vars.moduleHeight/2 - 4, grid.vars.moduleWidth/2 - Math.sqrt(2)/2*(grid.vars.moduleWidth/2), grid.vars.moduleHeight/2 + 3, grid.vars.moduleWidth/2 + Math.sqrt(2)/2*(grid.vars.moduleWidth/2), grid.vars.moduleHeight/2 + 3)
        //     .fill(color1)
        //     .stroke(false);
        //     break;
        // }


        if(name == "Yining  Shi"){
          if(text.indexOf("I miss you") > -1 || text.indexOf("i miss you") > -1 || text.indexOf("i missed you") > -1 || text.indexOf("I missed you") > -1){
            var color = new Rune.Color("#ff0000");
            //red color
            // console.log(name);
            // console.log(text);
            // console.log(time);
          }
          else if(text.indexOf("me too") > -1){
            var color = new Rune.Color("#af3aeb");
            // console.log(text);
          }
          else if(text.indexOf("haha") > -1 || text.indexOf("Haha") > -1){
            var color = new Rune.Color("#62C462");
            // console.log(text);
          }
          else if(text.indexOf("floor") > -1 || text.indexOf("Floor") > -1){
            var color = new Rune.Color("#fe9001");
            // console.log(text);
          }
          else if(text.indexOf("data") > -1 || text.indexOf("Data") > -1){
            var color = new Rune.Color("#1F3A93");
            // console.log(text);
            console.log(name);
            console.log(text);
            console.log(time);
            console.log(i);
            console.log(j);
          }
          else{
            var color = new Rune.Color(244, 154, 193);
            // console.log(text);
          }
          var tree2 = r.circle(grid.vars.moduleWidth/2, grid.vars.moduleHeight/2, 4)
          .fill(color)
          .stroke(false);
        }

        else if(name == "Sagar Mohite"){
          if(text.indexOf("I miss you") > -1 || text.indexOf("i miss you") > -1 || text.indexOf("i missed you") > -1 || text.indexOf("I missed you") > -1){
            var color2 = new Rune.Color("#ff0000");
            //red color
            // console.log(name);
            // console.log(text);
            // console.log(time);
            // console.log(i);
            // console.log(j);
          }
          else if(text.indexOf("me too") > -1 || text.indexOf("Me too") > -1 || text.indexOf("I miss you too") > -1 || text.indexOf("i miss you too") > -1){
            var color2 = new Rune.Color("#af3aeb");
            //purple
            // console.log(text);
          }
          else if(text.indexOf("haha") > -1 || text.indexOf("Haha") > -1){
            var color2 = new Rune.Color("#62C462");
            // console.log(text);
            //green
          }
          else if(text.indexOf("floor") > -1 || text.indexOf("Floor") > -1){
            var color2 = new Rune.Color("#fe9001");
            // console.log(text);
            //orange
          }
          else if(text.indexOf("data") > -1 || text.indexOf("Data") > -1){
            var color2 = new Rune.Color("#1F3A93");
            // console.log(text);
            console.log(name);
            console.log(text);
            console.log(time);
            console.log(i);
            console.log(j);
          }
          else{
            var color2 = new Rune.Color("#5BC0DE");
            //light blue
          }
          var tree2 = r.triangle(grid.vars.moduleWidth/2, grid.vars.moduleHeight/2 - 4, grid.vars.moduleWidth/2 - Math.sqrt(2)/2*(grid.vars.moduleWidth/2), grid.vars.moduleHeight/2 + 3, grid.vars.moduleWidth/2 + Math.sqrt(2)/2*(grid.vars.moduleWidth/2), grid.vars.moduleHeight/2 + 3)
          .fill(color2)
          .stroke(false);
        }
        // if(tree2!==""){
          grid.add(tree2, i, j); 
        // }

      }
    }
    r.draw();
   });



// var grid1 = r.grid({
//   x: 100,
//   y: 0,
//   width: r.width-200,
//   height: r.height,
//   // gutter: 10,
//   columns: 1,
//   rows: 6
// });

// var title = r.text("NORWEGIAN WOOD", 0, -1.2)
//   .fill("#b9bccf")
//   .stroke(false)
//   .fontSize(38)
//   .fontFamily("Book Antiqua")
//   .fontWeight("bold")

// var author = r.text("HARUKI MURAKAMI", -1.5, 27.5)
//   .fill("#b9bccf")
//   .stroke(false)
//   .fontSize(45)
//   .fontFamily("Courier New")

// grid1.add(title, 1, 2);
// grid1.add(author, 1, 6);

// var size = 10;

// var col = Math.round(Rune.random(1, 10));
// var row = Math.round(Rune.random(1, 10));
// var col = 3;
// var row = 7;


    // var height = Rune.random(20, 30);

    // var h2 = Rune.random(235, 225);
    // var s2 = Rune.random(45, 60);
    // var v2 = Rune.random(10, 25);

    // var line1 = r.line(30, height+7, 30, height+17).strokeWidth(2);
    // fullMessage[0]
    // var message = fullMessage[0];
    // console.log(message);
    // var name = fullMessage[i*100+j].author;

// var background = r.rect(0, 0, 60, 50).fill("#253255").stroke(false);
// var roof = r.triangle(30, 0, 15, 20, 45, 20).fill(19, 26, 45).stroke(false);
// var house = r.rect(15, 20, 30, 20).fill(1, 7, 23).stroke(false);
// var light1 = r.rect(32, 25, 8, 6).fill(254, 200, 30).stroke(false);
// grid.add(background, col, row);
// grid.add(roof, col, row);
// grid.add(house, col, row);
// grid.add(light1, col, row);

// for(var k = 0; k < 100; k++){
//   var light = r.rect(35+k*0.1, 25+k*0.1, 6+k*0.1, 6+k*0.1).fill(254, 200, 30, 0.01).stroke(false);
//   grid.add(light, col, row);
// }



// });

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