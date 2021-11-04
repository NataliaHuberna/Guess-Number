let randomNum;
let isRandomNum = false;

function culcNum(){
    let minNum = Number(document.getElementsByClassName("min")[0].value);
    let maxNum = Number(document.getElementsByClassName("max")[0].value);
    let countToTry = Number(document.getElementsByClassName("countTry")[0].value);
    let numToTry = Number(document.getElementsByClassName("numToTry")[0].value);
    let isNumber = false;
    isNumber = checkForNum(minNum);
    if (!isNumber){
        return;
    }
    isNumber = checkForNum(maxNum);
    if (!isNumber){
        return;
    }
    isNumber = checkForNum(countToTry);
    if (!isNumber){
        return;
    }
    isNumber = checkForNum(numToTry);
    if (!isNumber){
        return;
    }
    if (!isRandomNum){
        randomNum = Math.trunc(Math.random() * (maxNum - minNum) + minNum);
        isRandomNum = true;
    }
    console.log(randomNum);
    if (numToTry === randomNum){
        alert("You WIN!");
    }else{
        countToTry--;
        document.getElementsByClassName("countTry")[0].value = countToTry;
        document.getElementsByClassName("numToTry")[0].value = "";
    }
    if (countToTry === 0){
        alert("You lose your face and life");
    }
}

function checkForNum(dataType){
    if (typeof(dataType) === "number"){
        return true
    }else{
        alert("Error! Not a Number!")
        return false
    }
}

function resetNum(){
    document.getElementsByClassName("min")[0].value = "";
    document.getElementsByClassName("max")[0].value = "";
    document.getElementsByClassName("countTry")[0].value = "";
    document.getElementsByClassName("numToTry")[0].value = "";
}