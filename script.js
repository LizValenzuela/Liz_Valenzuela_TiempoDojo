let cookieBox = document.querySelector("#cookie");


function showAlert(element) {
    alert("Loading weather report...");
}

function removeBox() {
    cookieBox.remove();
}

function c2F(temp) {
    return Math.round(temp * (9 / 5) + 32);
}
function f2C(temp) {
    return Math.round((temp - 32) * (5 / 9));
}
function convert(element) {
    console.log(element.value);
    for (let i = 1; i < 9; i++){
        let tempSpan = document.querySelector("#temp"+i);
        let tempValue = parseInt(tempSpan.innerText);
        if (element.value == "C") {
            tempSpan.innerText = f2C(tempValue);
        }
        else {
            tempSpan.innerText = c2F(tempValue);
        }
    }
}