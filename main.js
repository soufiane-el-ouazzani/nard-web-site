var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;

var path1 = randomNumber1 + ".png";
var path2 = randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src" , path1);
document.querySelectorAll("img")[1].setAttribute("src" , path2);

if(randomNumber1 > randomNumber2){
    document.querySelector("a").innerHTML ="Player 1 wins ";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("a").innerHTML = "Player 2 wins ";
} else {
    document.querySelector("a").innerHTML = "no one wins";
}