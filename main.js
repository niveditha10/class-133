img="";
status="";
objects=[];
function preload(){
img=loadImage("dog_cat.jpg");
}

function setup(){
canvas=createCanvas(640,420);
canvas.position(320,100);
detector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="status:detecting objects";
}

function modelLoaded(){
    console.log("cocossd is loaded");
    status=true;
    detector.detect(img,gotResult);
}

function gotResult(error,result){
if(error){
    console.log(error);
}
else{
    console.log(result);
    objects=result;
}
}

function draw(){
image(img,0,0,640,420);

if(status!=""){
   
    for(i=0; i<objects.length; i++){
        document.getElementById("status").innerHTML="status:objects detected";
        percentage=floor(objects[i].confidence*100);
        fill(255,0,0);
        text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
     noFill();
     stroke(255,0,0);
     rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }

}

}