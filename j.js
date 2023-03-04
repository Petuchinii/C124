noseX=0
noseY=0

function preload() {
imagedefiltro = loadImage("s.png");
}

function setup() {
    canvas = createCanvas(400,350);
    canvas.position(500,250);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPose);
}

function draw() {
    image(video,0,0,400,350);
    image(imagedefiltro, noseX, noseY, 140, 140);
}

function modelLoaded() {
    console.log("activo poseNet");
}

function gotPose(results) {
    if(results.length >0) {
        noseX = results[0].pose.nose.x;
        noseX = results[0].pose.nose.y;
    }
}
