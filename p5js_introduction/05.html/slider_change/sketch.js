var slider, divi;
var x=0;
var seed = 0.2;
function setup() {
    createCanvas(800, 800);
    slider = createSlider(0, 1, 0, 0.0001);
    divi = createSlider(0.5,5.0,0.5);
    //slider.changed(maFonction);
    //  background(0);
    // strokeWeight(30);
    fill(0,10);
    noStroke();
    background(255);
}

function draw() {
    // background(255);
    push();
    translate((width*noise(seed)), (height/2));
    // var val = slider.value();
     x = (sin(millis()/1000));

    // x = slider.value();
    var y = 1.0 - pow(sin(PI * x/divi.value()), 2.0);// *-height/2;
    //var y = 1.0 - pow(abs(x), 3.5);
    var sz = 40*y + 10;
    ellipse(y * width / 2, x*height/2, sz,sz);

  //  ellipse( x*width/2,y*-height/2, 20, 20);
  //  ellipse(0,0, 300*y, 300*y);
    pop();
    //text(slider.value(), width/2, height/2)
    seed += 0.002;
}

function maFonction() {
    // background(random(255), 0, random(255));
}
