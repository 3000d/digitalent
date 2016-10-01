
var sliders = [];
var s;
var angle = 0;
var offsetStep = 0.3;
function setup() {
  noCanvas();
  s = createSlider(0.0,100.0);
  s.input(offsetSet);
  s.value(0);
  for(var i= 0; i< 303; i++){
    sliders[i] = createSlider(0,255);
  }
}

function draw() {
  var offset = 0;
  for(var i =0; i<sliders.length; i++){
    var val = map(sin(angle+offset),-1, 1, 0,255);
    var col = color(val,0,0);
    sliders[i].style("-webkit-slider-runnable-track", val);
    if(s.value() > 0){
      sliders[i].value(val);
    }



    offset += offsetStep/1000;
  }

  angle += 0.2;
}

function offsetSet(v){

  offsetStep = s.value();
}
