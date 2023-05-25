

Webcam.set({
    width:350 ,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>' ;
    });
}

console.log('ml5 version: ' , ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/J1Q4j1xro/model.json', modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully !");
}

function check() {
    img = document.getElementById('captured_image');
    classifer.clasify(img, gotResult);
}

function speak() {
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The secong prediction is " + prediction_2;

    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);

    synth.speak(utterThis);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = result[0].lable;
        document.getElementById("result_emotion_name2").innerHTML = result[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();

        if(result[0].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(result[0].label == "Sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(result[0].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }

        //x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x
        
        if(result[1].label == "Happy") {
            document.getElementById("update_emoji").innerHTML = "&#128522;";
        }
        if(result[1].label == "Sad") {
            document.getElementById("update_emoji").innerHTML = "&#128532;";
        }
        if(result[1].label == "Angry") {
            document.getElementById("update_emoji").innerHTML = "&#128548;";
        }
        }
} 