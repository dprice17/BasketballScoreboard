let score1 = 0
let score2 = 0

document.getElementById("score1").textContent = score1
document.getElementById("score2").textContent = score2


function score1Add1(){
   document.getElementById("score1").textContent = score1 += 1
}

function score1Add2(){
    document.getElementById("score1").textContent = score1 += 2
}

function score1Add3(){
    document.getElementById("score1").textContent = score1 += 3
}

function score2Add1(){
   document.getElementById("score2").textContent = score2 += 1
}

function score2Add2(){
    document.getElementById("score2").textContent = score2 += 2
}

function score2Add3(){
    document.getElementById("score2").textContent = score2 += 3
}

function gameRestart(){
    document.getElementById("score1").textContent = score1 -= score1
    document.getElementById("score2").textContent = score2 -= score2
}
