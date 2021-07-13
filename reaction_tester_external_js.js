var start = new Date().getTime();//gets the time when the page is loaded

function getRandomColor(){
  var letters = '0123456789ABCDEF'.split('');//splitting a string into an array
  //var letters is an array and '0123456789ABCDEF' is a string
  var color = '#';//colors in html start with a #
  for (var i = 0;i<6;i++)
  {
    color += letters[Math.floor(Math.random()*16)];//concatinate the array to color which already has a '#' at the start
  }
  return color;
}

function makeShapeAppear(){

  document.getElementById("shape").style.backgroundColor = getRandomColor();

  if(Math.random() > 0.5){//If you want a circle (but here since width and height are different you would get an ellipse)
    document.getElementById("shape").style.borderRadius = "50%";
  }

  var toprandom = Math.random()*200;//max value would be 290px
  document.getElementById("shape").style.top = toprandom+"px";//make the shape at 'toprandom' distance from the top

  var leftrandom = Math.random()*290;//max value would be 290px
  document.getElementById("shape").style.left = leftrandom+"px";//make the shape at 'leftrandom' distance from the top

  var bottomrandom = Math.random()*290;//max value would be 290px
  document.getElementById("shape").style.bottom = bottomrandom+"px";//make the shape at 'bottomrandom' distance from the top

  var widthrandom = Math.random()*290;//Math.random() gives a value between 0 and 1
  document.getElementById("shape").style.width = widthrandom+"px";

  var heightrandom = Math.random()*290;//Math.random() gives a value between 0 and 1
  document.getElementById("shape").style.height = heightrandom+"px";
  //random width and height would mostly always give rectangles

  start = new Date().getTime();//timer starts when the shape appears
  document.getElementById("shape").style.display = "block";//display the shape
}

function appearAfterDelay(){
  //funtion used to make the code look neater and since this command is used again in the program you dont want to rewrite the entire thing again
  setTimeout(makeShapeAppear, Math.random()*2000);//run function makeShapeAppear after a random amount of time between 0 to 2s
  //Math.random() gives a number between 0 and 1
}


var cnt = 1;
var avgtimeTaken = 0;
var avgtimeTakenrounded = 0;
var totalTime = 0;
var quickestTime = 10000;
var stp = 0;

function stopfunc(){
  document.getElementById("shape").style.display = "none";
}

document.getElementById("stop").onclick = function(){
  stp = 1;
}

document.getElementById("reload").onclick = function(){
  location.reload();
}

document.getElementById("start").onclick = function(){
  stp = 0;
  appearAfterDelay();
    document.getElementById("shape").onclick = function(){
      if(stp == 1)
      {
        stopfunc();
      }
      else{
        appearAfterDelay();
      document.getElementById("shape").style.display = "none";//make that shape vanish
      var end = new Date().getTime();//this function gives time in milliseconds.So divide by 1000 to get seconds
      var timeTaken = (end-start)/1000;

      if(timeTaken < quickestTime){
        quickestTime = timeTaken;
      }

      totalTime = totalTime + timeTaken;
      avgtimeTaken = totalTime/cnt;
      avgtimeTakenrounded=parseFloat(avgtimeTaken).toFixed(3);
      cnt++;
      document.getElementById("yourTimeid").innerHTML = timeTaken + "s";
      document.getElementById("youravgTimeid").innerHTML = avgtimeTakenrounded +"s";
      document.getElementById("yourquickestTimeid").innerHTML = quickestTime +"s";
    }
  }
}
