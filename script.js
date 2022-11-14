//Boton cambio modo

const input = document.getElementsByClassName("calculator");
const botonSwitch = document.getElementById("check");

botonSwitch.addEventListener("click", function(){
    if(botonSwitch.checked){
        document.body.classList.switch("dark");
    }
    else{
        console.log("light") 
    }
});

const toggleThemeMode = () => {
    calculator.classList.toggle("dark");
};
calculator.onchange = toggleThemeMode;

//funcionamiento calculadora
function display(val) {
    document.getElementById('result').value += val;
}

function clearScreen() {
    document.getElementById('result').value = "";
}

function solve() {
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
    return y;
}

