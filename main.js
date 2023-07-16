noseX = 0;
noseY = 0;
function preload()
{
    mustache = loadImage("https://i.postimg.cc/L5JjYghD/8i-AEqkk-BT-removebg-preview.png");
}
function draw()
{
    image(video,0,0,500,500);
    image(mustache,noseX,noseY,90,80);
}
function setup()
{
    canvas = createCanvas(500,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model is loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-43;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + results[0].pose.nose.x);
        console.log("noseY = " + results[0].pose.nose.y);
    }
}
function take_snapshot()
{
    save("my_filter_image.jpg");
}