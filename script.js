//Boton cambio modo
const input = document.getElementsByClassName("calculator");
const botonSwitch = document.getElementById("check");

botonSwitch.addEventListener("click", function(){
    if(botonSwitch.checked){
        document.getElementById("dark");
    }
    else{
        document.getElementById("light");
    }
});

//funcionamiento calculadora
function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function clear() {
    let x = document.getElementById('result').value = "";
    let y = x.substring(0, value.length - 1);
    document.getElementById('result').value = y;
}
function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

function porcent() {
    let x = document.getElementById('result').value;
    let y = eval(x/100);
    document.getElementById('result').value = y;
    return y;
}

