// create the 1st random dice
//step 1. Generate 1st random num, from 1-6
let randomNum1 = Math.ceil(Math.random() * 6);
console.log(randomNum1);

//step 2. create a random image src path
let randomImgSrc1 = "/images/dice" + randomNum1 + ".png";

//step 3. manipulate the src, use setAttribute()
document.getElementsByClassName("img1")[0].setAttribute("src", randomImgSrc1);

// create the 2nd random dice
// step 4. Generate 2nd random num, from 1-6 (use either Math.ceil or Math.floor, slightly different)
let randomNum2 = Math.floor(Math.random() * 6) + 1;

//step 5.create a random image src path
let randomImgSrc2 = "/images/dice" + randomNum2 + ".png";

//step 6. manipulate the src (try another method to select)
document.querySelector("img.img2").setAttribute("src", randomImgSrc2);

// update heading according to game result
if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNum1 < randomNum2) {
  document.querySelector("h1").innerHTML = "👑 Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "👯 Draw! 👬";
}
