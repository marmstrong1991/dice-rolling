var arrayValueDice1 = []; //globle array to store first dice value 

function diceOneRolled() {
    console.log("FUNCTION diceOneRolled() CALLED");
    var randomNumber = Math.floor(Math.random() * 6) + 1; //1-6   // Create random number
    var randomDiceImage = "dice" + randomNumber + ".png"; //dice1.png-dice6.png
    var randomImageSource = "images/dice1/" + randomDiceImage; //images/dice1/dice1.png-images/dice1/dice6.png
    var image1 = document.querySelectorAll("img")[0] //get 1th image values
    image1.setAttribute("src", randomImageSource);
    arrayValueDice1.push(randomNumber); //store value to array
    Calculator(arrayValueDice1, "1");

}
var arrayValueDices2 = []; //globle array to store 2nd dice value 

function diceTwoRolled() {
    console.log("FUNCTION diceTwoRolled() CALLED");
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 // Create random number
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6 // Create random number
    var randomDiceImage1 = "dice-" + randomNumber1 + ".png"; //dice1.png-dice6.png
    var randomDiceImage2 = "dice-" + randomNumber2 + ".png"; //dice1.png-dice6.png
    var randomImageSource1 = "images/dice2/" + randomDiceImage1; //images/dice2/dice-1.png-images/dice2/dice-6.png
    var randomImageSource2 = "images/dice2/" + randomDiceImage2; //images/dice2/dice-1.png-images/dice2/dice-6.png
    var image1 = document.querySelectorAll("img")[1] //get 2th image values
    var image2 = document.querySelectorAll("img")[2] //get 3th image values
    image1.setAttribute("src", randomImageSource1);
    image2.setAttribute("src", randomImageSource2);
    arrayValueDices2.push(randomNumber1); //store value to array
    arrayValueDices2.push(randomNumber2); //store value to array
    Calculator(arrayValueDices2, "2");

}
var arrayValueDices3 = []; //globle array to store 3rd dice value 

function diceThreeRolled() {
    console.log("FUNCTION diceThreeRolled() CALLED");
    var randomNumber = Math.floor(Math.random() * 12) + 1; //1-12 // Create random number
    var randomDiceImage = "dice" + randomNumber + ".jpg"; //images/dice3/dice1.jpg-images/dice3/dice6.jpg
    var randomImageSource = "images/dice3/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[3] //get 4th image values
    image1.setAttribute("src", randomImageSource);
    arrayValueDices3.push(randomNumber); //store value to array
    Calculator(arrayValueDices3, "3");

}
var arrayValueDices4 = []; //globle array to store 4th dice value 

function diceFourRolled() {
    console.log("FUNCTION diceFourRolled() CALLED");
    var randomNumber = Math.floor(Math.random() * 12) + 1; //1-12 // Create random number
    var randomDiceImage = "dice" + randomNumber + ".jpg";
    var randomImageSource = "images/dice3/" + randomDiceImage; //images/dice3/dice1.jpg-images/dice3/dice6.jpg
    var image1 = document.querySelectorAll("img")[4] //get 5th image values
    image1.setAttribute("src", randomImageSource); //assign new image
    arrayValueDices4.push(randomNumber); //store value to array
    Calculator(arrayValueDices4, "4");

}

function Calculator(arrayValueValue, diceid) {
    console.log("FUNCTION meanCalculator() CALLED")
    let sumofallnumber = 0;

    for (let i = 0; i < arrayValueValue.length; i++) {
        sumofallnumber += arrayValueValue[i];
    }
    let mo
    console.log("SUM OF ALL NUMBER  " + sumofallnumber + " LENGTH OF arrayValue " + arrayValueValue.length);
    document.getElementById("mean" + diceid).innerHTML = "Mean " + (sumofallnumber / arrayValueValue.length).toFixed(2);
    document.getElementById("mode" + diceid).innerHTML = "Mode " + getmodesArr(arrayValueValue);
    document.getElementById("median" + diceid).innerHTML = "Mode " + getmedianArr(arrayValueValue);
}

function getmodesArr(arrayValue) {
    console.log("FUNCTION getmodesArr() CALLED")
    var frequencyExist = {}; // arrayValue of frequencyExist.
    var maxFreqExist = 0; // holds the max frequencyExist.
    var modesArr = [];
    for (var i in arrayValue) {
        frequencyExist[arrayValue[i]] = (frequencyExist[arrayValue[i]] || 0) + 1; // increment frequencyExist.
        if (frequencyExist[arrayValue[i]] > maxFreqExist) { // is this frequencyExist > max so far ?
            maxFreqExist = frequencyExist[arrayValue[i]]; // update max.
        }
    }
    for (var k in frequencyExist) {
        if (frequencyExist[k] == maxFreqExist) {
            modesArr.push(k);
        }
    }
    return modesArr;
}

function getmedianArr(arrayValue) {
    console.log("FUNCTION getmedianArr() CALLED")
    const arraySort = arrayValue.sort();
    console.log("arraySort " + arraySort)
    const mid = Math.ceil(arrayValue.length / 2);

    const median =
        arrayValue.length % 2 == 0 ? (arraySort[mid] + arraySort[mid - 1]) / 2 : arraySort[mid - 1];
    return median.toFixed(2);
}