const guessuh =document.getElementById("guesser");
const text0=document.getElementById("text0");
const text1=document.getElementById("text1");
const text2=document.getElementById("text2");
const text3=document.getElementById("text3");
const text4=document.getElementById("text4");
const text5=document.getElementById("text5");
let guess;
let num;
let word = "NATHAN";
function clickButton(){
    guess=guessuh.value;
    if(guess.length==1){
        checkGuess(guess);
    }
}


function checkGuess(){
    for(let i=0;i<word.length;i++){
        if(guess==word[i]){
            num=i;
            console.log(num);
            if(num==0){
            num=text0;
            updateScreen(num);
            }else if (num==1){
            num=text1;
            updateScreen(num);
            }else if (num==2){
                num=text2;
                updateScreen(num);
            }else if (num==3){
                num=text3;
                updateScreen(num);
            }else if (num==4){
                num=text4;
                updateScreen(num);
            }else if (num==5){
                num=text5;
                updateScreen(num);
            }
        }
    }
}



function updateScreen(num){
    guess=guess.toString();
    num.innerHTML = guess;

    
}






























