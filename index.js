const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");
const btn5 = document.getElementById("5");
const btn6 = document.getElementById("6");
const btn7 = document.getElementById("7");
const btn8 = document.getElementById("8");
const btn9 = document.getElementById("9");
const btn0 = document.getElementById("0");
const dbtn = document.getElementById("dividebtn");
const mbtn = document.getElementById("multibtn");
const minusbtn = document.getElementById("minusbtn");
const pbtn = document.getElementById("plusbtn");
const equalbtn = document.getElementById("equalbtn");
const textfield = document.getElementById("textfield");
const resetbtn  = document.getElementById("resetbtn");
console.log(textfield);
resetbtn.addEventListener("click", function (event){
    event.preventDefault();
    textfield.setAttribute('value', '');
});
btn1.addEventListener("click", function (event) {
    event.preventDefault();
    
    textfield.setAttribute('value', document.getElementById("textfield").value + "1")
    
});
btn2.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value +"2")
    
});
btn3.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "3")
    
});
btn4.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "4")
    
});

btn5.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "5")
    
});
btn6.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "6")
    
});
btn7.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "7")
    
});
btn8.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "8")
    
});
btn9.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value', document.getElementById("textfield").value + "9")
    
});

btn0.addEventListener("click", function (event) {
    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "0")
    
});
dbtn.addEventListener("click", function (event) {

    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "/")
})
mbtn.addEventListener("click", function (event) {

    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "*")
})
pbtn.addEventListener("click", function (event) {

    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "+")
})
minusbtn.addEventListener("click", function (event) {

    event.preventDefault();
    textfield.setAttribute('value',document.getElementById("textfield").value + "-")
})
equalbtn.addEventListener("click", function (event) {
    event.preventDefault();
    var answer = eval(document.getElementById("textfield").value);
    document.getElementById("textfield").setAttribute('value', answer);
    console.log(answer);
})
