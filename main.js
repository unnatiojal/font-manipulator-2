function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 500);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}