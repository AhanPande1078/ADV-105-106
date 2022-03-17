Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

camera = document.getElementById("#camera");
Webcam.attach("#camera");

function takeSnapshot() {
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = "<img id='capturedImage' src='"+data_uri+"'>";
     });
}
console.log("ml5 version ",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/fYUg0LsUn/model.json",modelLoaded);

function modelLoaded(){
    console.log("model loaded");
    }
function check(){
    img = document.getElementById("capturedImage");
    classifier.classify(img, gotResult);
}
function gotResult(error,result){
if(error){
    console.log(error);
}
else {
    console.log(result);
    document.getElementById("personName").innerHTML = result[0].label;
    accuracy = result[0].confidence.toFixed(3);
    percentage = accuracy * 100
    document.getElementById("personAccuracy").innerHTML = percentage + " %";
}

}