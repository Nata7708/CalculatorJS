function add() {
    let res = 0;
    res = parseInt(document.getElementById("input1").value, 10) + 
    parseInt(document.getElementById("input2").value, 10);
    document.getElementById("equals").value = res;
}
function subtract() {
    let res = 0;
    res = parseInt(document.getElementById("input1").value, 10) - 
    parseInt(document.getElementById("input2").value, 10);
    document.getElementById("equals").value = res;
}
function multiply() {
    let res = 0;
    res = parseInt(document.getElementById("input1").value, 10) * 
    parseInt(document.getElementById("input2").value, 10);
    document.getElementById("equals").value = res;
}
function divide() {
    let res = 0;
    res = parseInt(document.getElementById("input1").value, 10) / 
    parseInt(document.getElementById("input2").value, 10);
    document.getElementById("equals").value = res;
}