function playGame(){
    getParams();
    //checkParams();
    //getRandomNum();
    if (allIsOk){
        getResult();
    }
}

function getParams(){
    allIsOk = true;
    if (!isHaveParams){
        min = Number(document.getElementById("min").value);
        max = Number(document.getElementById("max").value);
        countTry = Number(document.getElementById("countTry").value);
        offInputGroup();
        getRandomNum();
        isHaveParams = true;
        checkInputParams();
    }
    numTry = Number(document.getElementById("numTry").value);
    document.getElementById("numTry").value = "";
    checkNumTryParams();
}

function checkInputParams(){
    if (isNaN(min) || min === 0){
        document.getElementById("min").disabled = false;
        document.getElementById("min").value = "";
        min = 0;
        isHaveParams = false;
        allIsOk = false;
        document.getElementById("result").innerHTML = "Error, Enter Correct Minimum Number";
    }
    if (isNaN(max) || max === 0){
        document.getElementById("max").disabled = false;
        document.getElementById("max").value = "";
        min = 0;
        isHaveParams = false;
        allIsOk = false;
        document.getElementById("result").innerHTML = "Error, Enter Correct Maximum Number";
    }
    if (isNaN(countTry) || countTry === 0){
        document.getElementById("countTry").disabled = false;
        document.getElementById("countTry").value = "";
        min = 0;
        isHaveParams = false;
        allIsOk = false;
        document.getElementById("result").innerHTML = "Error, Enter Correct Numbers of Try";
    }
}

function checkNumTryParams(){
    if (isNaN(numTry) || numTry === 0){
        numTry = 0;
        allIsOk = false;
        document.getElementById("result").innerHTML = "Error, Enter Correct Guess Number";
    }
}

function getRandomNum(){
        randNum = Math.floor(Math.random() * ((max + 1) - min)) + min;
        console.log(randNum);
}

function getResult(){
    if (countTry > 1){
        if (numTry === randNum){
            document.getElementById("result").innerHTML = `Congratulations! You WIN, Guess nuber is ${randNum} `;
            document.getElementById("numTry").disabled = true;
            document.getElementById("numTry").style.opacity = .3;
            document.getElementById("try").disabled = true;
            document.getElementById("try").style.opacity = .3;
        }else{
            countTry--;
            document.getElementById("countTry").value = countTry;
          //  document.getElementById("result").innerHTML = getMessageRange();
        }
    }else{
        document.getElementById("result").innerHTML = `Sorry but You LOSE, Guess nuber is ${randNum} `;
        document.getElementById("numTry").disabled = true;
        document.getElementById("numTry").style.opacity = .3;
        document.getElementById("try").disabled = true;
        document.getElementById("try").style.opacity = .3;   
    }
    
}

function offInputGroup(){
    document.getElementById("min").disabled = true;
    document.getElementById("min").style.opacity = .3;
    document.getElementById("max").disabled = true;
    document.getElementById("max").style.opacity = .3;
    document.getElementById("countTry").disabled = true;
    document.getElementById("countTry").style.opacity = .3;
}

function onInputGroup(){
    document.getElementById("min").disabled = false;
    document.getElementById("min").style.opacity = 1;
    document.getElementById("max").disabled = false;
    document.getElementById("max").style.opacity = 1;
    document.getElementById("countTry").disabled = false;
    document.getElementById("countTry").style.opacity = 1;
}

function reSet(){
    randNum = 0;
    isRandomNum = false;
    min = 0;
    max = 0;
    countTry = 0;
    numTry = 0;
    isHaveParams = false;
    allIsOk = true;
    onInputGroup();
    document.getElementById("numTry").disabled = false;
    document.getElementById("numTry").style.opacity = 1;
    document.getElementById("try").disabled = false;
    document.getElementById("try").style.opacity = 1;
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("countTry").value = "";
    document.getElementById("result").innerHTML = "";

}