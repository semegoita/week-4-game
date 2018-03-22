
 $(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19);
    $("#random").text(Random);
console.log(Random);
var generatedNumbers = [];
var userTotal;
var total =0;
var lost =0;
var win = 0;

$("#wins").text(win);
$("#loses").text(lost);
console.log(win);

function randomNumbers (){
    for (var i=0; i<4; i++) {
        var num = Math.floor(Math.random()*11+1);
        generatedNumbers.push(num);
    }
    console.log(generatedNumbers);
}
randomNumbers();

// reset function 
function reset(){
    Random=Math.floor(Math.random()*11+1);
    $("winner").text(Random);
    generatedNumbers=[];
    randomNumbers();
    total =0;
    $("#number").text(total);
}

// adds the wins to the total
function celeb (){
    alert("you won!!!");
    win++;
    $("#wins").text(win);
    reset();
}

// adds the losses to the total
function loser (){
    alert("you lose!!");
    lost++;
    $("#loses").text(lost);
    reset();
}
// set up onclick for crystals
$("#crystal1").on("click", function(){
    total = total + generatedNumbers[0];
    console.log("New total = " + total);
    $("#number").text(total);
        if (total === Random){
            celeb();
        } 
        else if(total > Random){
            loser();
        }
})
$("#crystal2").on("click", function(){
    total = total + generatedNumbers[1];
    console.log("New total = " + total);
    $("#number").text(total);
        if (total === Random){
            celeb();
        } 
        else if(total > Random){
            loser();
        }
})
$("#crystal3").on("click", function(){
    total = total + generatedNumbers[2];
    console.log("New total = " + total);
    $("#number").text(total);
        if (total === Random){
            celeb();
        } 
        else if(total > Random){
            loser();
        }
})
$("#crystal4").on("click", function(){
    total = total + generatedNumbers[3];
    console.log("New total = " + total);
    $("#number").text(total);
        if (total === Random){
            celeb();
        } 
        else if(total > Random){
            loser();
        }
})
// 
// psuedo code
// a game with 4 crystalls
// every crystal need to have a random number between 1-12
//a new random number should be generated every time we win or lose
// when clicking on any crystal it should add with previous result
// untill it equals the total score
// if it is not equal we start over
// it it is equall we increment  win
//


 });