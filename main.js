//https://teachablemachine.withgoogle.com/models/I8SmeUgJo/
Webcam.attach('camera');
camera=document.getElementById("camera");

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="abc" src="'+data_uri+'">'
    })
}
console.log("ml5 version is",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/O-X7ZtKLl/',modelloaded);
function modelloaded(){
    console.log("model is loaded without any error");
}

function check(){
    img = document.getElementById("abc");
    classifier.classify(img,gotresults);

}

function gotresults(error,results){
    if(error){
console.log(error);

    }
    else{
        console.log(results);
        document.getElementById("object_name").innerHTML=results[0].label;
        document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
        
    }
}

    
