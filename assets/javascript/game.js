
 $(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19);
    $("#winner").text(Random);
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
// $("result").html('Random Result:'+ random);

// for ( var i = 0; i<4;i++){
//     var randomC = Math.floor(Math.random()*12+1);

//     // var crystal = $("<div>");
//     //     crystal.attr({
//     //         "class": 'crystal',
//     //         "data-random": 'random'
//     //     });
//     //$(".crystals").append(crystal);
// }
// $(".crystals").on('click', function(){
//     alert('hi');
// })
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