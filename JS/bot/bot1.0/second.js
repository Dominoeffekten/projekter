'use strict';

//Bad words: https://stackoverflow.com/questions/17384992/how-to-block-bad-words-upon-form-submit
//Bot code:  https://codepen.io/dominoeffekten/pen/WNNgVqa

const $ = function (foo) {
    return document.getElementById(foo);    // save keystrokes
}

//Spørgsmål
var ask = [
    'Hej, hvad hedder du?',
    'Hvornår er du født?',
    'Hvor bor du?',
    'Ved du, hvem der har bygget mig?',
    'Jeg har en aftale nu. Det var hyggeligt. Vi ses senere'
];

var number = 0;

function show() {
    var inputBox = $("you");
    var output = $("result");
    var your = $("yours");
    var badWords = ["crap", "ugly", "brat", "basterddouch", "fuck", "grim", "luder"];

    //tjekker for baneord
    for(var i=0; i < badWords.length; i++) {
            var bad = badWords[i];
        if (inputBox.value == bad){ //ingen bandeord
            alert('Hey, tal ordenligt. Jeg har også følelser');
            inputBox.value = "";
        }
    }

    if(inputBox.value == "") { //hvis der ikke bliver skrevet noget

    }else { //Spørgsmål
        if(number == 0){
            output.style.display = 'block';
            your.style.display = 'block';
            console.log(number);
            your.innerHTML = inputBox.value;
            output.innerHTML = 'Hej ' + inputBox.value;
            inputBox.value = "";
            number++;
            setTimeout(newAsk, 2000);
        }
        else if(number == 1){
            output.style.display = 'block';
            your.style.display = 'block';
            your.innerHTML = inputBox.value;
            output.innerHTML = inputBox.value + '? Jeg er født i ' + new Date().getFullYear();
            inputBox.value = "";
            number++;
            setTimeout(newAsk, 2000);
            console.log(number);
        }
        else if(number == 2){
            output.style.display = 'block';
            your.style.display = 'block';
            your.innerHTML = inputBox.value;
            output.innerHTML = 'Der har jeg ikke været før';
            inputBox.value = "";
            number++;
            setTimeout(newAsk, 2000);
            console.log(number);
        } else if(number == 3){
            output.style.display = 'block';
            your.style.display = 'block';
            your.innerHTML = inputBox.value;
            output.innerHTML = 'Rikke Domino har bygget mig';
            inputBox.value = "";
            number++;
            setTimeout(newAsk, 2000);
            console.log(number);
        }
    }
};

//tryk enter
document.addEventListener("keydown", function key(e) { 
    if (e.which == 13) {
        show();
    }
});

//find nyt spørgsmål
function newAsk(){
    var output = $("result");
    var bot = $("askBot");
    var your = $("yours");
    var you = $("input");

    bot.innerHTML = ask[number];
    output.style.display = 'none';
    your.style.display = 'none';
    output.innerHTML = "";
    if(number == ask.length - 1) { // sidste spørgsmål
        you.style.display = 'none';
      }

};