


Webcam.set({ width: 350, 
    height: 280, 
    image_format: 'png',
     png_quality: 90 }); 
camera = document.getElementById("camera");
 Webcam.attach('#camera');

 function takeSnap(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"' id='result_img'>"
    })
 }


 console.log("Ml5.version: "+ml5.version)
 classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZorhkbOR9/model.json",modalloded)

 function modalloded(){
    console.log("modalLoded")
    
 }
 

 function check(){
img = document.getElementById("result_img")
classifier.classify(img,gotResult)
    
 }
 function speak(){
    var synth= window.speechSynthesis;
    var spek_data_1="Your first predection is "+ predection_1
    var spek_data_2="Your Second predection is "+ predection_2
    var utterthis= new  SpeechSynthesisUtterance(spek_data_1+spek_data_2)
    synth.speak(utterthis)
 }

 function gotResult(error,results){

   if(error){
      console.log(error)
   }else{
      console.log(results)
      document.getElementById("prediction_1").innerHTML=results[0].label + " <br> <h3 id='accuracy_1'>Accuracy : " + results[0].confidence.toFixed(2)*100 +"%</h3> "
      document.getElementById("prediction_2").innerHTML=results[1].label  + "<br>  <h3 id='accuracy_2'>Accuracy : " + results[1].confidence.toFixed(2)*100+"%</h3> "
      predection_1=results[0].label
      predection_2=results[1].label
   speak()
pred_1=document.getElementById("pred_1").innerHTML
   if(predection_1=="Happy"){
      document.getElementById("pred_1").innerHTML="&#128522;"
   }else if(predection_1=="Sad"){
      document.getElementById("pred_1").innerHTML="&#128532;"
   }else if(predection_1=="Crying"){
      document.getElementById("pred_1").innerHTML="&#128546;"
   }else if(predection_1=="Angry"){
      document.getElementById("pred_1").innerHTML=" &#128545;"
   }
   if(predection_2=="Happy"){
      document.getElementById("pred_2").innerHTML="&#128522;"
   }else if(predection_2=="Sad"){
      document.getElementById("pred_2").innerHTML="&#128532;"
   }else if(predection_2=="Crying"){
      document.getElementById("pred_2").innerHTML="&#128546;"
   }else if(predection_2=="Angry"){
      document.getElementById("pred_2").innerHTML=" &#128545;"
   }
   }
}