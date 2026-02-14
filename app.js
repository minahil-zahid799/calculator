let displayed = document.getElementById("displayed")
function addToDisplay(val){
    displayed.value += val
}
function calculate() {
    if(displayed.value === "") {
        displayed.placeholder = "Enter something";
        return;
    }
    let result = eval(displayed.value);
    displayed.value = result;
}

 function clearDisplay(){
    displayed.value = "";
 }
function enterCalculator(){
  document.getElementById("landing").style.display = "none";
  document.getElementById("calculator").classList.remove("hidden");
}


