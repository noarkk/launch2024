const guess = document.getElementById("guesser");
const rest = document.getElementById("reset");
let maxNum=100;
let minNum=0;
let answer;
const response= document.getElementById("response");
var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function loadGame() {
    response.innerHTML=" ";
    rest.style.visibility=" hidden";
    guess.max = maxNum;
    guess.min=minNum;
    answer= Math.random();
    let range=maxNum-minNum+1; //sets range of nums cus mathrandom gets between 1/0
    answer=answer*range;
    answer+=minNum;
    answer=Math.floor(answer);

}

function makeGuess() {
    let myGuess = parseInt(guesser.value); 
    if(myGuess>answer){
            response.innerHTML+=`${myGuess} is to high `;
            document.body.style.backgroundColor="red";
    }else if(myGuess<answer){
        response.innerHTML+=`${myGuess} is to low `;
        document.body.style.backgroundColor="red";
    }else{
        response.innerHTML+=`${myGuess} is correct `;
        document.body.style.backgroundColor="green";
        rest.style.visibility=" visible";
            myConfetti({
            particleCount:100,
            spread:200
        })
    }
}