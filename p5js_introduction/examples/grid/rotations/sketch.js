var cols = 0,
    rows = 0;
var w = 80;
var lastRotation = 0;
var increment = 0.01;
var couleurs = [
    '#DA3561',
    '#8C3072',
    '#042D3B',
    '#00AFDE',
    '#DB3F04'
];

function setup() {
    createCanvas(800, 800);
    background(255);
    strokeWeight(1);
    //  strokeJoin(ROUND);
    //  strokeCap(ROUND);
    stroke(0);
    noFill();
    cols = width / w;
    rows = height / w;


}
var a = 0.01;

function draw() {
    var sw = 1.0 - pow(abs(cos(HALF_PI * a / 2.0)), 2.0) * -10;

    background(255, 30);
    stroke(255);
    strokeWeight(sw);
    for (var r = 0; r < rows; r++) {
        var y = r * w ;
        for (var c = 0; c < cols; c++) {
            var x = c * w;
            push();
            translate(x, y);
            if ((r + c) % 2 == 0) {
                var col = couleurs[floor(r % couleurs.length)];
                fill(col);
                rotate(a);
                //  strokeWeight((r+1));
                //line(x,y, x+w,y+w);
            } else {
                var col = couleurs[floor(c % couleurs.length)];
                fill(col);
                //noFill();
                //  line(x+w, y, x,y+w);
                rotate(-a);

            }

            //rotate(mouseX/width*TWO_PI);


            rect(0, 0, w, w);

            pop();
            //stroke(0,10);
            //line(x+w, y, x,y+w);
        }

    }
    // TODO : stop for a second
    if (a > HALF_PI || a < -HALF_PI) {
        if (millis() > lastRotation + 2000 ) {
            increment *= -1;
            a += increment;
        }

    } else{
        a = a + increment;
        lastRotation = millis();
    }


}
