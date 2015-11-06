const TARGET_WIDTH = 50
const TARGET_HEIGHT = 50;
const INTERVAL = 1000;

var canvasWidth;
var canvasHeight;

var ctx;
var currentXOfCtx;
var currentYOfCtx;

var currentCount = 0;
var hitCount = 0;

function gameCanvasStart() {
    var can1 = document.getElementById("can1");
    canvasWidth = can1.getAttribute("width");
    canvasHeight = can1.getAttribute("height");
    ctx = can1.getContext("2d");
    
    can1.onmousemove = mouseMoved;
    
    setInterval(moveRect, INTERVAL)
    moveRect();
}

function mouseMoved(e) {

  var elemRect = document.getElementById("can1").getBoundingClientRect();
  var elementOffsetTop = elemRect.top;
  var elementOffsetLeft = elemRect.left;
  
  mouseX = e.pageX - elementOffsetLeft;
  mouseY = e.pageY - elementOffsetTop;
  
  if (mouseX >= currentXOfCtx && mouseX <= currentXOfCtx + TARGET_WIDTH
      &&  mouseY >= currentYOfCtx && mouseY <= currentYOfCtx + TARGET_HEIGHT) {
    hitCount += 1;
    document.getElementById("hitCount").innerHTML = hitCount;
  }

  document.getElementById("mouseX").innerHTML = mouseX;
  document.getElementById("mouseY").innerHTML = mouseY;
  
  var btn1 = document.getElementById("mouseMovedCount");
  var btn1Content = btn1.innerHTML;
  
  currentCount += 1;
  
  document.getElementById("mouseMovedCount").innerHTML = currentCount;
}

function moveRect() {
    clear(ctx);
    
    currentXOfCtx = Math.random() * canvasWidth;
    currentYOfCtx = Math.random() * canvasHeight;
    
    if (currentXOfCtx > canvasWidth - TARGET_WIDTH) {
      currentXOfCtx = canvasWidth - TARGET_WIDTH;
    }

    if (currentYOfCtx > canvasHeight - TARGET_HEIGHT) {
      currentYOfCtx = canvasHeight- TARGET_HEIGHT;
    }
    
    ctx.fillStyle = "#000000";
    ctx.fillRect(currentXOfCtx, currentYOfCtx, TARGET_WIDTH, TARGET_HEIGHT); 
}

function clear(context) {
    context.clearRect(0, 0, canvasHeight, canvasWidth);
}