var answer;
var score = 0;
var backgroundImages = [];


function nextQuestion() {
    const n1 = Math.round(Math.random() * 4);
    const n2 = Math.round(Math.random() * 5);
    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;
    answer = n1 + n2;
}

function checkAnswer() {
    
    const prediction = predictImage();
    // console.log(`answer: ${answer}, prediction: ${prediction}`);

    if (prediction == answer) {
        
        if (score < 6){
            score++;
            backgroundImages.push(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
        }else{
            alert("Well done! Your math garden is in full bloom! Want to start again?");
            score = 0;
            backgroundImages = [];
            document.body.style.backgroundImage = backgroundImages;
   

        }
        
    }else {

       if (score != 0){
            score--;
            alert("Oops! Check your calculations and try writing the number neater next time!");
            setTimeout(function () {
                backgroundImages.pop(`url('images/background${score}.svg')`);
            document.body.style.backgroundImage = backgroundImages;
            }, 1000);
       } 
    }

}

