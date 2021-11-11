let randomNum;
let isRandomNum = false;
let minNum
let maxNum
let numToTry 
let isHaveParams = false;

function getParams() {
    minNum = Number(document.getElementById("min").value);
    maxNum = Number(document.getElementById("max").value);
    countToTry = Number(document.getElementById("countTry").value);
    isHaveParams = true;
    document.getElementById("min").disabled = true;
    document.getElementById("min").style.opacity = .3;
    document.getElementById("max").disabled = true;
    document.getElementById("max").style.opacity = .3;
    document.getElementById("countTry").disabled = true;
    document.getElementById("countTry").style.opacity = .3;
}
document.getElementById("min").disable = true;
function culcNum(){
    if (!isHaveParams){
        getParams();
    }
    numToTry = Number(document.getElementById("numToTry").value);
    let erorReturn = isErorNaN();
    if (erorReturn === -1){
        return;
    }
    erorReturn = isInRightRange(minNum, maxNum);
    if (erorReturn === -1){
        return;
    }
    if (!isRandomNum){
        randomNum = Math.trunc(Math.random() * (maxNum - minNum) + minNum);
        isRandomNum = true;
    }
    if (numToTry === randomNum){
        alert("You WIN!");
        document.getElementsByClassName("result")[0].innerHTML = `Поздравляем вы выиграли! Загаданное число было ${numToTry}` ;
        document.getElementsByClassName("numToTry")[0].value = "";
        document.getElementById("try").disabled = true;
        document.getElementById("try").style.opacity = .3;
        return;
    }else{
        countToTry--;
        document.getElementsByClassName("countTry")[0].value = countToTry;
        document.getElementsByClassName("result")[0].innerHTML = `Попыток осталось : ${countToTry}`;
        document.getElementsByClassName("numToTry")[0].value = "";
    }
    if (countToTry === 0){
        alert("You Lose!");
        document.getElementsByClassName("result")[0].innerHTML = `К сожалению вы проиграли! Загаданное число было ${randomNum}` ;
        document.getElementsByClassName("numToTry")[0].value = "";
        document.getElementById("try").disabled = true;
        document.getElementById("try").style.opacity = .3;
        return;
    }
}

function checkForNum(dataType){
    console.log(dataType);
    console.log(typeof(dataType));
    if (isNaN(dataType)){
        resetNum();
        document.getElementsByClassName("result")[0].innerHTML = "Ошибка введите коректные данные";
        alert("Ошибка введите коректные данные");
        return -1;
    }
}

function isErorNaN(){
    let isErorNaN = 0;
    isErorNaN = checkForNum(minNum);
    if (isErorNaN === -1){
        return -1
    }
    isErorNaN = checkForNum(maxNum);
    if (isErorNaN === -1){
        return -1
    }
    isErorNaN = checkForNum(countToTry);
    if (isErorNaN === -1){
        return -1
    }
    isErorNaN = checkForNum(numToTry);
    if (isErorNaN === -1){
        return -1
    }
}

function isInRightRange(min, max){
    if (min === 0 && max ===0){
        resetNum();
        document.getElementsByClassName("result")[0].innerHTML = "Ошибка введите данные";
        alert("Ошибка Введите данные");
        return -1;
    }
    if (min > max){
        resetNum();
        document.getElementsByClassName("result")[0].innerHTML = "Ошибка Максимальное число меньше Минимального";
        alert("Ошибка Максимальное число меньше Минимального");
        return -1;
    }
};

function resetNum(){
    document.getElementsByClassName("min")[0].value = "";
    document.getElementsByClassName("max")[0].value = "";
    document.getElementsByClassName("countTry")[0].value = "";
    document.getElementsByClassName("numToTry")[0].value = "";
    document.getElementsByClassName("result")[0].innerHTML = ``;
    document.getElementById("min").disabled = false;
    document.getElementById("min").style.opacity = 1;
    document.getElementById("max").disabled = false;
    document.getElementById("max").style.opacity = 1;
    document.getElementById("countTry").disabled = false;
    document.getElementById("countTry").style.opacity = 1;
    document.getElementById("try").disabled = false;
    document.getElementById("try").style.opacity = 1;
};