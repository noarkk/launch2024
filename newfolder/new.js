const guess =document.getElementById("guesser");
let word = "NATHAN"
function clickButton(){
    if(guess.length==1){
            checkGuess(guess)
    }
}


function checkGuess(G){
    for(let i=0;i<word.length;i++){
        if(G==word[i]){
            updateScreen(G)
        }
    }
}



function updateScreen(L){

}






























