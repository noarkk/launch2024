const guessuh =document.getElementById("guesser");
let guess;
let word = "NATHAN";
function clickButton(){
    guess=guessuh.value;
    if(guess.length==1){
            checkGuess(guess);
    }
}


function checkGuess(G){
    for(let i=0;i<word.length;i++){
        if(G==word[i]){
            updateScreen(G);
        }
    }
}



function updateScreen(L){
    console.log(L);
}

function start(){
    
}




























